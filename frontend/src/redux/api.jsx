import axios from 'axios';
import {updateUsername, loginSuccess} from './authSlice';


//Connexion
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


//Send the Token to the API
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


//Load the Profil linked to the token sent
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
            dispatch(updateUsername({ firstName, lastName, userName }));
        }
    } catch (error) {
        console.error(error);
    }
}

//change usename in the API
export async function editUsername(token, newUsername, user) {
    try {
      const url = 'http://localhost:3001/api/v1/user/profile';
      const config = {
        
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },

      };
      const requestNewUsername = {
        userName: newUsername,
      };
  
      const response = await axios.put(url, requestNewUsername, config);
  
      if (response.status === 200) {
        const updatedUser = {
          ...user, 
          userName: newUsername, 
        };
        return updatedUser;
      }
    } catch (error) {
      console.error(error);
    }
  }