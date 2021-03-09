import axios from 'axios';

const baseURL: string = '';

const instance = axios.create({
  validateStatus: (status: number) => {
    let correct = false;

    if (status >= 200 && status < 300) {
      correct = true;
    } else if (
      status === 401 ||
      status === 400 ||
      status === 403 ||
      status === 503 ||
      status === 422
    ) {
      correct = true;
    }

    return correct;
  },
})

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
    const baseURL = 'http://localhost:8080/api/v1'
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