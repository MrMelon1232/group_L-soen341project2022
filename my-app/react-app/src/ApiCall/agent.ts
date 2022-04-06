import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.defaults.withCredentials = true

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  // eslint-disable-next-line @typescript-eslint/ban-types
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  // eslint-disable-next-line @typescript-eslint/ban-types
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
  list: () => requests.get('products'),
  details: (id: number) => requests.get(`products/${id}`),
}

const Cart = {
  get: () => requests.get('cart'),
  addItem: (productId: number, quantity: number) =>
    requests.post(`cart?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity = 1) =>
    requests.delete(`cart?productId=${productId}&quantity=${quantity}`),
}

const agent = {
  Catalog,
  Cart,
}

export default agent
