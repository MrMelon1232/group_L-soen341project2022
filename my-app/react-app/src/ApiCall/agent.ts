/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { store } from '../store/configureStore'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true

const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.request.use((config) => {
  const token = store.getState().account.user?.token
  if (config.headers === undefined) config.headers = {}
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  // eslint-disable-next-line @typescript-eslint/ban-types
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  // eslint-disable-next-line @typescript-eslint/ban-types
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { 'Content-type': 'undefined' },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { 'Content-type': 'undefined' },
      })
      .then(responseBody),
}

function createFormData(item: any) {
  const formData = new FormData()
  // eslint-disable-next-line
  for (const key in item) {
    formData.append(key, item[key])
  }
  return formData
}

const Admin = {
  createProduct: (product: any) =>
    requests.postForm('products', createFormData(product)),
  updateProduct: (product: any) =>
    requests.putForm('products', createFormData(product)),
  deleteProduct: (id: number) => requests.delete(`products/${id}`),
}

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { data, status } = error.response!
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = []
          // eslint-disable-next-line no-restricted-syntax
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key])
            }
          }
          throw modelStateErrors.flat()
        }
        toast.error(data.title)
        break
      case 401:
        toast.error(data.title)
        break
      case 500:
        toast.error(data.title)
        break
      default:
        break
    }
    return Promise.reject(error.response)
  }
)

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
const Account = {
  login: (values: any) => requests.post('Account/login', values),
  signup: (values: any) => requests.post('Account/register', values),
  currentUser: () => requests.get('Account/currentUser'),
  fetchAddress: () => requests.get('Account/savedAddress'),
}

const Orders = {
  list: () => requests.get('orders'),
  fetch: (id: number) => {
    requests.get(`orders/${id}`)
  },
  create: (values: any) => requests.post('orders', values),
}

const agent = {
  Catalog,
  Cart,
  Account,
  Orders,
  Admin,
}

export default agent
