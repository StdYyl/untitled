import axios from 'axios'

export function requested(url, method = 'get', data) {
  return axios({ method, url, data, timeout:6000})
}
