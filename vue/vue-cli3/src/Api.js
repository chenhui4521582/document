import Axios from "axios";

Axios.interceptors.request.use(
  function(config) {
    // config.headers.Authorization = queryUrl.token // 设置token
    // config.headers['App-Channel'] = queryUrl.channel// 设置channel
    // config.headers['App-Version'] = '2.9.4.1'
    // config.url = `${config.url}?v=${Date.now()}`
    // console.log(config.url,'*****')
    return config;
  },
  function(error) {
    console.log("通讯失败");
  }
);

Axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log("通讯失败");
  }
);

class Api {
  GET(url, params = {}) {
    return Axios.get(`${url}`, { params });
  }
  POST(url, params = {}) {
    return Axios({
      method: "post",
      url: url,
      data: params
    });
  }
}

export default new Api();
