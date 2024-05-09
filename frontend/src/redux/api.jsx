import axios from 'axios';
import {loginSuccess} from './authSlice';

export const loginUser = (userInformation) => async (dispatch) => {

    const url = "http://localhost:3001/api/v1/user/login";
    const config = {
        headers: {
            'Content-Type' : 'application/json',
        },
    };

    try {
        const response = await axios.post(url, userInformation, config);

        if (response.status === 200) {
            const token = response.data.body.token;

            sessionStorage.setItem('token', token);
            dispatch(loginSuccess(token));

            return { payload: token };
        }

    } catch (error) {
        console.error("Erreur lors de la connexion", error);
    }
}