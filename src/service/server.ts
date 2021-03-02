import Axios from './network';

import IRegister from '../interfaces/Authentication/IRegister';
import ILogin from '../interfaces/Authentication/ILogin';


const Server = {
    // login the user
    loginUser: (data: ILogin) => Axios.post('login', data),
    // register the user
    registerUser: (data: IRegister) => Axios.post('register', data),
}

export default Server;