import { InferActionsTypes, BaseThunkType } from '../../..'

import { Dispatch } from 'redux'
import { moviesApi } from '@src/api'

import { TDiscoverMovie, TDiscoveredMovies } from '../types'
import { TResponseError } from '@src/api/types'

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
type TInitialState = typeof initialState

let initialState = {
  data: {} as TDiscoveredMovies,
  isLoading: false,
  error: null as TResponseError | null,
}

export const discoveredReducer = (
  state = initialState,
  action: ActionsTypes
): TInitialState => {
  switch (action.type) {
    case 'tmdb/movies/discovered/SET_ITEMS':
      return {
        ...state,
        data: action.payload.data,
      }
    case 'tmdb/movies/discovered/SET_LOADING_STATUS':
      return { ...state, isLoading: action.payload.isLoading }
    case 'tmdb/movies/discovered/SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state
  }
}

const actions = {
  setData: (data: TDiscoveredMovies) =>
    ({
      type: 'tmdb/movies/discovered/SET_ITEMS',
      payload: { data },
    } as const),
  setLoadingStatus: (isLoading: boolean) =>
    ({
      type: 'tmdb/movies/discovered/SET_LOADING_STATUS',
      payload: { isLoading },
    } as const),
  setError: (error: TResponseError | null) =>
    ({
      type: 'tmdb/movies/discovered/SET_ERROR',
      payload: { error },
    } as const),
}

export const getDiscoveredMovies = (args: TDiscoverMovie): ThunkType => async (
  dispatch: Dispatch<ActionsTypes>
) => {
  try {
    dispatch(actions.setLoadingStatus(true))
    dispatch(actions.setData(await moviesApi.getDiscovered(args)))
    dispatch(actions.setLoadingStatus(false))
  } catch (error) {
    dispatch(actions.setError(error.response))
  }
}
