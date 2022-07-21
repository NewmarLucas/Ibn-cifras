import axios from 'axios'
import { getEnvironment } from '../helpers/env'

const { API_URL } = getEnvironment()

const api = axios.create({
  baseURL: API_URL
})

export default api