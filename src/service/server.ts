import Axios from './network';

import IRegister from '../interfaces/Authentication/IRegister';
import ILogin from '../interfaces/Authentication/ILogin';
import IVerifyToken from '../interfaces/Authentication/IVerifyToken'
import Itoken from '../interfaces/Authentication/Itoken';
import ISummarize from '../interfaces/Authentication/ISummarize';
import IData from '../interfaces/Checkout/IData-interface';
import ISignature from '../interfaces/Checkout/ISignature-interface';
import IForm from '../interfaces/Public/IForm-interface';

import { AxiosPromise } from 'axios';

const Server = {
    /**  Authentication **/
    // login the user
    loginUser: (data: ILogin): AxiosPromise => Axios.post('/auth/login', data),
    // register the users
    registerUser: (data: IRegister): AxiosPromise => Axios.post('/auth/register', data),
    // Validate verify token
    validateToken: (data: IVerifyToken): AxiosPromise => Axios.post('/auth/verify', data),
    // request change password
    requestChangePassword: (data: {email : string}): AxiosPromise => Axios.post('/auth/forgotpasswordrequest', data),
    // check token validity
    verifyUser: (data: Itoken): AxiosPromise => Axios.post('/auth/checkuser', data),
    //change password
    changePassword: (data: {token : string, password : string}): AxiosPromise => Axios.post('/auth/forgotpassword', data),
    /** User Stuff **/
    // Get user details
    getUser: (): AxiosPromise => Axios.get('/user'),
    // Summarize
    summarizeNote: (data: ISummarize): AxiosPromise => Axios.post('/tools/summarize', data),
    // Make notes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audioToText: (data: any): AxiosPromise => Axios.post('/upload', data),
    // Checkout
    checkData: (data: IData): AxiosPromise => Axios.post('/checkout/stripe/charge', data),
    paypalCheck: (data: { orderID: string, amount: number, paymentType: string, title: string, currency: string }): AxiosPromise => Axios.post('/checkout/paypal/checkout', data),
    // payfast signature
    payfastSignature: (data: ISignature): AxiosPromise => Axios.post('/checkout/payfast/signature', data),

    // Contact form
    contactForm: (data: IForm): AxiosPromise => Axios.post('/public/contact-form', data),

    // Study
    getSessions: (): AxiosPromise => Axios.get('/study'),
    createSession: (data: { title: string }): AxiosPromise => Axios.post('/study/create', data)
}

export default Server;