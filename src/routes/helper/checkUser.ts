import Server from '../../service/server';

const checkUser = async (token: string): Promise<boolean> => {
    const { verifyUser } = Server;
    const response = await verifyUser({ token });
    if (response.status === 200) {
        return true
    }
    return false;
}

export default checkUser;