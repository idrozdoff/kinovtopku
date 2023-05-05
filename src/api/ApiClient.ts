import axios from 'axios';

type Request = {
  url: string;
  method: string;
  query?: any;
  data?: unknown;
  token?: string;
};

interface ResponseError extends Error {
  responseCode: number;
  messages?: any[] | string;
}

export default class ApiClient {
  prefix: string;
  constructor({ prefix = 'api/' } = {}) {
    this.prefix = prefix;
  }

  axios() {
    return axios;
  }

  get(url: string, query = {}, token?: string) {
    return this.request({
      method: 'get',
      url,
      query,
      token,
    });
  }

  put(url: string, data = {}, token: string) {
    return this.request({
      method: 'put',
      url,
      data,
      token,
    });
  }

  patch(url: string, data = {}, token: string) {
    return this.request({
      method: 'patch',
      url,
      data,
      token,
    });
  }

  post(url: string, data = {}, token: string) {
    return this.request({
      method: 'post',
      url,
      data,
      token,
    });
  }

  delete(url: string, token: string) {
    return this.request({
      method: 'delete',
      url,
      token,
    });
  }

  getHeaders(token?: string) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return headers;
  }

  request({ url, method, query = {}, data = {}, token }: Request) {
    const headers = this.getHeaders(token);

    const config = {
      baseURL: this.prefix,
      url,
      method,
      headers,
      data,
      params: query,
      withCredentials: true,
      validateStatus: function (status: number) {
        return status < 500;
      },
    };

    return axios(config).then(res => {
      if (res.status >= 400) {
        const error = new Error(
          'Bad request: code ' + res.status
        ) as ResponseError;
        error.responseCode = res.status;

        switch (res.status) {
          case 401:
            error.messages = [
              {
                field: 'authorization',
                message: 'Необходима авторизация',
              },
            ];
            break;
          default:
            error.messages = res.data;
        }

        throw error;
      }

      return res.data;
    });
  }
}
