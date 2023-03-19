import axios from "axios";
const instance = axios.create({
  baseURL:'https://itunes.apple.com/',
  //timeout: 3000,
  header:{'Content-Type': 'application/json;charset=UTF-8'}
})
/** 请求发送前 **/
instance.interceptors.request.use((config) => {
  // 请求发送前做点啥？例如统一添加token？
  config.headers['authorization'] = 'token-xxxx';
  return config;
},(error) => {
  return error
})

/** 接收响应处理 **/
instance.interceptors.response.use((response) => {
  switch(response.status){
	case 200:
	  return {data:response.data, status:response.status};
	case 304:
	  return {data:response.data, status:response.status}
	case 500:
	  return {data:"系统异常", status:response.status}
	default:
	  return {data:response}
  }
  // …………
  return response;
},(error) => {
	return Promise.reject(error.message)
})

/* Promise封装Get请求 */
export const get = (url, params={}) => {
	return new Promise((resolve, reject) => {
	   instance.get(url, {params})
	   .then(result => {
		  resolve(result)
	   }).catch(err => {
		  reject(err)
	   })
	})
}

/* async…await封装Get请求 */
export const asyncGET = async (url,params={}) => {
	try {
	   return await instance.get(url, {params})	
	}catch(err){
	   console.log(err)
	}
}

// POST请求
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
     instance.post(url, data)
     .then( result => {
        resolve("OK")
     }).catch( error => {
        reject("error")
     })
  })
}

// delete请求
export const delRequest = (url, data) => {
  return new Promise((resolve, reject) => {
     instance.delete(url, data)
     .then(result => {
       resolve("OK")
     }).catch( error => {
       reject("error")
     })
  })
}

// PUT请求
export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    instance.put(url, data)
    .then(result => {
       resolve("OK")
    }).catch(error => {
       reject("error")
    })
  })
}

// PATCH请求
export const patch = (url, data) => {
  return new Promise((resolve, reject) => {
     instance.patch(url, data,{'headers':{'content-type':'application/json'}})
     .then(result => {
       resolve("OK")
     }).catch( error => {
       reject("error")
     })
  })
}