import axios from "axios";

/**
 * 向 axios 的所有请求中统一添加特殊响应头
 */
axios.interceptors.request.use(config => {
    const defaultHeaders = { "content-type": "application/json" };
    Object.assign(config.headers, defaultHeaders);
    return config;
});  

export function login(params) {
    if(!params.username) {
        throw new Error("请填写用户名");
    }
    if(!params.password) {
        throw new Error("请填写密码");
    }
    const { username, password } = params;
    return axios.post('/api/user/login', { username, password });
}