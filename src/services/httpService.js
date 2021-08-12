import axios from 'axios'
import { toast } from 'react-toastify'

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    toast.error('An unexpected error occured')
  }
  return Promise.reject(error)
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
}
