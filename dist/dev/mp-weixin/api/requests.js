"use strict";
const common_vendor = require("../common/vendor.js");
const instance = common_vendor.axios.create({
  baseURL: "https://itunes.apple.com/",
  //timeout: 3000,
  header: { "Content-Type": "application/json;charset=UTF-8" }
});
instance.interceptors.request.use((config) => {
  config.headers["authorization"] = "token-xxxx";
  return config;
}, (error) => {
  return error;
});
instance.interceptors.response.use((response) => {
  switch (response.status) {
    case 200:
      return { data: response.data, status: response.status };
    case 304:
      return { data: response.data, status: response.status };
    case 500:
      return { data: "系统异常", status: response.status };
    default:
      return { data: response };
  }
}, (error) => {
  return Promise.reject(error.message);
});
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  });
};
exports.get = get;
