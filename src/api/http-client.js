import axios from 'axios'
import { localStorage } from '@src/lib/local-storage'

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

http.interceptors.request.use((config) => {
  config.params = config.params || {}
  config.params['api_key'] = process.env.REACT_APP_API_KEY

  const session_id = localStorage.load('session').session_id || ''
  config.params['session_id'] = encodeURIComponent(session_id)

  const lang = localStorage.load('lang') || 'en-US'
  config.params['language'] = encodeURIComponent(lang)
  return config
})

http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject({
      response: {
        data: error.response.data,
        status: error.response.status,
      },
    })
  }
)
