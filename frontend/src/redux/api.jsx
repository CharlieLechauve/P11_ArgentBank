import axios from 'axios';
import {updateUserName, loginSuccess} from './authSlice';

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

export async function apiCallToken (token, url, config) {

    try {
        const response = await axios.post(url,null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        ...config,
        });

        if (response.status === 200 ) {
            return response.data.body;
        }

    } catch (error) {
        console.error(error);
    }
}

export const loadProfile = (token) => async (dispatch) => {

    const url = "http://localhost:3001/api/v1/user/profile";
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.post(url,null,config);

        if (response.status === 200 ) {
            const { firstName, lastName, userName } = response.data.body;
            dispatch(updateUserName({firstName, lastName, userName }));
        }
    } catch (error) {
        console.error(error);
    }
}