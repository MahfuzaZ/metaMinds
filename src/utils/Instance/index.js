import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://hakaton.traveloo.uz/api/',
  timeout: 1500,
  headers: {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  // headers: {'X-Custom-Header': 'foobar'}
});