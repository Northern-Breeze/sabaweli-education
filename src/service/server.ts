import Axios from './network';

import IRegister from '../interfaces/Authentication/IRegister';
import ILogin from '../interfaces/Authentication/ILogin';
import IVerifyToken from '../interfaces/Authentication/IVerifyToken'
import Itoken from '../interfaces/Authentication/Itoken';

const Server = {
    // login the user
    loginUser: (data: ILogin) => Axios.post('/auth/login', data),
    // register the users
    registerUser: (data: IRegister) => Axios.post('/auth/register', data),
    // Validate verify token
    validateToken: (data: IVerifyToken) => Axios.post('/auth/verify', data),
    // check token validity
    verifyUser: (data: Itoken) => Axios.post('/auth/checkuser', data)
}

export default Server;