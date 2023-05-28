import axios from "axios";

const fetcher = axios.create({
    baseURL : "http://34.64.165.57:8080",
    timeout: 2500
})

//권한이 필요한 api가 생길 시 추가 
fetcher.interceptors.request.use((config) => {
    return config;
})

export default fetcher;