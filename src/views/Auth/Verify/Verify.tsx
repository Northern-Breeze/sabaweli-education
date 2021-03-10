import axios from 'axios';
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Template from '../../Template';

import './Verify.scss';

interface ServerResponse {
    error: boolean,
    message: string
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Verify() {
    const [severState, setServerState] = React.useState<ServerResponse>()
    const query = useQuery();
    const history = useHistory()
    const verifyAccount = async (token: string) => {
        try {
            const response = await axios.get(`http://localhost:5000/v1/confirm_email/${token}`);
            if (response.status === 200) {
                if(response.data.success){
                    setServerState({ error: false, message: response.data.message });
                } else {
                    setServerState({ error: true, message: response.data.message })
                }
            }else {
                setServerState({ error: true, message: 'something went wrong' })
            }
        } catch (error) {
            console.log(error);
            setServerState({ error: true, message: 'Server error, please try again' })
        }
    }
    React.useEffect(() => {
        const token = query.get('token');
        if (token) {
            verifyAccount(token);
        }
    },[])

    return (
        <Template>
            <div className="verify-page-container">
                <div className="content">
                    <div className="button-container">
                        <button className="button" onClick={() => {
                            history.push('/login')
                        }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </Template>
    )
}
