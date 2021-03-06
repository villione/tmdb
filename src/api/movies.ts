import { http } from './http-client.js'
import {
  TMovieDetails,
  TPopularMovies,
  TNowPlayingMovies,
  TTopRatedMovies,
  TUpcomingMovies,
  TSimilarMovies,
  TRecommendations,
  TVideo,
  TMovieExternalIds,
  TDiscoveredMovies,
  TDiscoverMovie,
} from '@src/store/modules/movies/types'
import { createQueryString } from '@src/lib/create_query_string'
import { TAccountStates } from '@src/store/modules/account/types.js'

const getDetails = (movie_id: number, append_to_response: string) =>
  http
    .get<TMovieDetails>(
      `/movie/${movie_id}?${createQueryString({ append_to_response })}`
    )
    .then((res) => res.data)

const getPopular = (page?: number, region?: string) =>
  http
    .get<TPopularMovies>(
      `/movie/popular?${createQueryString({ page, region })}`
    )
    .then((res) => res.data)

const getNowPlaying = (page?: number, region?: string) =>
  http
    .get<TNowPlayingMovies>(
      `/movie/now_playing?${createQueryString({ page, region })}`
    )
    .then((res) => res.data)

const getTopRated = (page?: number, region?: string) =>
  http
    .get<TTopRatedMovies>(
      `/movie/top_rated?${createQueryString({ page, region })}`
    )
    .then((res) => res.data)

const getUpcoming = (page?: number) =>
  http
    .get<TUpcomingMovies>(`/movie/upcoming?${createQueryString({ page })}`)
    .then((res) => res.data)

const getSimilar = (movie_id: number, page?: number) =>
  http
    .get<TSimilarMovies>(
      `/movie/${movie_id}/similar?${createQueryString({ page })}`
    )
    .then((res) => res.data)

const getRecommendations = (movie_id: number, page?: number) =>
  http
    .get<TRecommendations>(
      `/movie/${movie_id}/recommendations?${createQueryString({
        page,
      })}`
    )
    .then((res) => res.data)
const getVideos = (movie_id: number) =>
  http.get<TVideo>(`/movie/${movie_id}/videos?`).then((res) => res.data)

const getExternalIds = (movie_id: number) =>
  http
    .get<TMovieExternalIds>(`/movie/${movie_id}/external_ids?`)
    .then((res) => res.data)

const getDiscovered = (args: TDiscoverMovie) =>
  http
    .get<TDiscoveredMovies>(
      `/discover/movie?${createQueryString({
        ...args,
      })}`
    )
    .then((res) => res.data)
const getAccountStates = (movie_id: number) =>
  http
    .get<TAccountStates>(`/movie/${movie_id}/account_states`)
    .then((res) => res.data)

export const moviesApi = {
  getDetails,
  getPopular,
  getNowPlaying,
  getTopRated,
  getUpcoming,
  getSimilar,
  getRecommendations,
  getVideos,
  getExternalIds,
  getDiscovered,
  getAccountStates,
}
