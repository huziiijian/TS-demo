import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const instance = axios.create({});
type PostAction = {
    (url:string,
        data?:any,
        config?:{
            silent?: boolean,
            withMock?: boolean,
            mock?: any,
            headers?: any
        }
    ):Promise<any>
}


// config 设定
const post:PostAction =  (
    url,
    data = {},
    config = {
        silent: false,
        headers: {}
    }
) => {
    const conf:AxiosRequestConfig = {
        headers: {}
    }


    return instance.post(url, data, conf)
}
export default {
    post
}
