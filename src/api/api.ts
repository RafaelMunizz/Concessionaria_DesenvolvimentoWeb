import axios from 'axios'

export const ipBackend = 'http://192.168.68.113:8080'

export const api = axios.create({
  baseURL: ipBackend,
})
