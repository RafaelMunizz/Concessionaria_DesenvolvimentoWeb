import axios from 'axios'

export const ipBackend = 'http://localhost:8080'

export const api = axios.create({
  baseURL: ipBackend,
})
