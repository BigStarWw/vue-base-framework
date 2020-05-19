/**
 * Created by weiwei on 2020/5/19.
 */
import axios from 'axios';

const xhr = axios.create({
    baseURL: '',
    timeout: 6000,
    headers: {}
})

// 请求拦截
xhr.interceptors.request.use(
    // 请求前做点啥
    config => {
        return config
    },
    // 请求错误做点啥
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
xhr.interceptors.response.use(
    // 对响应做点啥
    response => {
        return response
    },
    // 响应错误做点啥
    error => {
        return Promise.reject(error)
    }
)

export default {
    post(url, data, config) {
        return xhr.post(url, data, config)
    },
    get(url, data){
        return xhr.get(url, {params: data})
    },
    put(url, data){
        return xhr.put(url, data)
    }
}