const axios = require("autoprefixer");
axios.defaults.baseURI = 'http://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.interceptors.request.use(
  config => {
    const token = getCookie('session');
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    if (token) {
      config.params = {'token':token}
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    if (response.data.errorCode === 2) {
      router.push({
        path:'/login',
        query:{redirect: router.currentRoute.fullPath}
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error.response.data)
  }
  );
