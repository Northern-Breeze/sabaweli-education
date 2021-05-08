import * as React from 'react';
import Server  from '../service/server';

interface UserHookType {
    username: string;
    email: string;
    loading: boolean;
}

export default function useUser(): UserHookType {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const fetcher = async () => {
        try {
            const response = await Server.getUser();
            if(response.status === 200){
                const user = await response.data;
                if(user.success){
                    setEmail(user.email);
                    setUsername(user.fullName);
                    setLoading(false);
                }
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    React.useEffect(() => {
        fetcher();
    },[])
    return { username, email, loading }
}