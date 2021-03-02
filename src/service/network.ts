import axios from 'axios';

const baseURL: string = '';

const instance = axios.create()

instance.interceptors.request.use(async config => {
  if (config.url && config.url.charAt(0) === '/') {
    config.url = `${baseURL}${config.url}`;
  }
  console.log(config.url);
  const token = localStorage.getItem('token') || "";
  config.headers.authorization = `Bearer ${token}`;

  return config;
}, error => Promise.reject(error));
  
instance.interceptors.request.use(async config => {
    const user = localStorage.getItem('user') || "";
    const baseURL = 'http://localhost:5000/v1'
    let token: string = '';
    if(user !== ''){
        const parsed = JSON.parse(user);
        token = parsed.userToken;
    }
    if (config.url && config.url.charAt(0) === '/') {
      config.url = `${baseURL}${config.url}`;
    }
   
    config.headers.authorization = `Bearer ${token}`;
   
    return config;
   }, error => Promise.reject(error));


   export default instance;