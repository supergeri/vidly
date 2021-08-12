import http from './httpService'
import { apiUrl } from '../config.json'
import jwtDecode from 'jwt-decode'
const apiEndpoint = apiUrl + '/auth'
const tokenKey = 'token'

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password })
  localStorage.setItem(tokenKey, jwt)
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey)
    return jwtDecode(jwt)
  } catch (err) {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
}
