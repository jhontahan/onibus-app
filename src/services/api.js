import axios from "axios";

// const baseURL = process.env.REACT_APP_API_URL;

  const api = axios.create({
    // baseURL: baseURL,
    baseURL: "http://localhost:8080",
  });

  class ApiService {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }

    post(url, objeto) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.post(requestUrl, objeto);
    }

    put(url, objeto) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.put(requestUrl, objeto);
    }

    delete(url) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.delete(requestUrl);
    }


    get(url) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.get(requestUrl);
    }

    getParametros(url, parametros) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.get(requestUrl, parametros);
    }

  }

export default ApiService;