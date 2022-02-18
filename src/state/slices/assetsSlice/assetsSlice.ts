import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AssetService } from '@shapeshiftoss/asset-service'
import { CAIP19 } from '@shapeshiftoss/caip'
import { Asset, NetworkTypes } from '@shapeshiftoss/types'
import cloneDeep from 'lodash/cloneDeep'

import { FeatureFlag } from '../../../constants/FeatureFlag'

let service: AssetService | undefined = undefined

// do not export this, views get data from selectors
// or directly from the store outside react components
const getAssetService = async () => {
  if (!service) {
    service = new AssetService('')
  }
  if (!service?.isInitialized) {
    await service.initialize()
  }

  return service
}

export type AssetsState = {
  byId: {
    [key: CAIP19]: Asset
  }
  ids: CAIP19[]
}

const initialState: AssetsState = {
  byId: {},
  ids: []
}

export const assets = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setAssets: (state, action: PayloadAction<AssetsState>) => {
      state.byId = { ...state.byId, ...action.payload.byId } // upsert
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]))
    }
  }
})

export const assetApi = createApi({
  reducerPath: 'assetApi',
  // not actually used, only used to satisfy createApi, we use a custom queryFn
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  // refetch if network connection is dropped, useful for mobile
  refetchOnReconnect: true,
  endpoints: build => ({
    getAssets: build.query<AssetsState, void>({
      // all assets
      queryFn: async () => {
        const service = await getAssetService()
        const assetArray = service?.byNetwork(
          // Cosmos assets have a network type of COSMOSHUB_MAINNET
          // If the flag is OFF then we'll filter out only Bitcoin/Ethereum assets
          // If the flag is ON then we'll allow all assets through
          FeatureFlag.Plugin.Cosmos ? undefined : NetworkTypes.MAINNET
        )
        const data = assetArray.reduce<AssetsState>((acc, cur) => {
          const { caip19 } = cur
          acc.byId[caip19] = cur
          acc.ids.push(caip19)
          return acc
        }, cloneDeep(initialState))
        return { data }
      },
      onCacheEntryAdded: async (_args, { dispatch, cacheDataLoaded, getCacheEntry }) => {
        await cacheDataLoaded
        const data = getCacheEntry().data
        data && dispatch(assets.actions.setAssets(data))
      }
    }),
    getAssetDescription: build.query<AssetsState, CAIP19>({
      queryFn: async (assetId, { getState }) => {
        const service = await getAssetService()
        // limitation of redux tookit https://redux-toolkit.js.org/rtk-query/api/createApi#queryfn
        const { byId: byIdOriginal, ids } = (getState() as any).assets as AssetsState
        const byId = cloneDeep(byIdOriginal)
        try {
          const { description, isTrusted } = await service.description({ asset: byId[assetId] })
          byId[assetId].description = description
          byId[assetId].isTrustedDescription = isTrusted
          const data = { byId, ids }
          return { data }
        } catch (e) {
          const data = `getAssetDescription: error fetching description for ${assetId}`
          const status = 400
          const error = { data, status }
          return { error }
        }
      },
      onCacheEntryAdded: async (_args, { dispatch, cacheDataLoaded, getCacheEntry }) => {
        await cacheDataLoaded
        const data = getCacheEntry().data
        data && dispatch(assets.actions.setAssets(data))
      }
    })
  })
})

export const { useGetAssetsQuery, useGetAssetDescriptionQuery } = assetApi
