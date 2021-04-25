import Axios from './network';

import IRegister from '../interfaces/Authentication/IRegister';
import ILogin from '../interfaces/Authentication/ILogin';
import IVerifyToken from '../interfaces/Authentication/IVerifyToken'
import Itoken from '../interfaces/Authentication/Itoken';
import ISummarize from '../interfaces/Authentication/ISummarize';
import { AxiosPromise } from 'axios';

const Server = {
    // login the user
    loginUser: (data: ILogin): AxiosPromise => Axios.post('/auth/login', data),
    // register the users
    registerUser: (data: IRegister): AxiosPromise => Axios.post('/auth/register', data),
    // Validate verify token
    validateToken: (data: IVerifyToken): AxiosPromise => Axios.post('/auth/verify', data),
    // check token validity
    verifyUser: (data: Itoken): AxiosPromise => Axios.post('/auth/checkuser', data),
    // Get user details
    getUser: (): AxiosPromise => Axios.get('/user'),
    // Summarize
    summarizeNote: (data: ISummarize): AxiosPromise => Axios.post('/tools/summarize', data),
    // Make notes
    audioToText: (data: any): AxiosPromise => Axios.post('/upload', data),
}

export default Server;