import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://quera.iran.liara.run',
    timeout:20000,
  })