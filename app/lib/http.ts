import axios from 'axios'

const server = axios.create({

})

server.interceptors.request.use(request=>{
    return request;
},error=>{
    return Promise.reject(error);
})

server.interceptors.response.use(response=>{
    return response;
},error=>{
    return Promise.reject(error);
}) 

export const http = server;
export const _get = (url:string,params?:any,config?:any)=>{return server.get(url,{...config,params})};
export const _post = (url:string,data?:any,config?:any)=>{return server.post(url,data,config)};
export const _put = (url:string,data?:any,config?:any)=>{return server.put(url,data,config)};
export const _delete = (url:string,params?:any,config?:any)=>{return server.delete(url,{...config,params})};