import axios, { AxiosInstance } from 'axios'

export default class Client {
  private axios: AxiosInstance

  constructor () {
    this.axios = axios.create({
      baseURL: '/'
    })
  }
}
