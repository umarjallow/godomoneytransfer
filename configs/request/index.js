import instance from './instance'


// request interceptor
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
instance.interceptors.response.use(

  response => {
    const res = response.data

    if (res.code !== 200) {
      /* Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      }) */

      if (res.code === 402) {
        // to re-login
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    console.log(error.message)
    return Promise.reject(error)
  }
)

export default instance