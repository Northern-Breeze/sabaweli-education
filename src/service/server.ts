import Axios from './network';

import IRegister from '../interfaces/Authentication/IRegister';
import ILogin from '../interfaces/Authentication/ILogin';
import IVerifyToken from '../interfaces/Authentication/IVerifyToken'
import Itoken from '../interfaces/Authentication/Itoken';
import ISummarize from '../interfaces/Authentication/ISummarize';
import IData from '../interfaces/Checkout/IData-interface';
import ISignature from '../interfaces/Checkout/ISignature-interface';

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audioToText: (data: any): AxiosPromise => Axios.post('/upload', data),
    // Checkout
    checkData: (data: IData): AxiosPromise => Axios.post('/checkout/stripe/charge', data),
    // payfast signature
    payfastSignature: (data: ISignature): AxiosPromise => Axios.post('/checkout/payfast/signature', data),
}

export default Server;