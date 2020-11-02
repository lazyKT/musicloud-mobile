/**
 * user-related network requests to the API
 */
import axios from 'axios';
import { acc } from 'react-native-reanimated';


// user registeration request
export const registerRequest = async ({ username, email, password }) => {

    const role = "user";

    try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
            username,
            email,
            password,
            role
        });

        return response;

    } catch (e) {
        console.log(e);
        return e.response;
    }
}


// User Login Requests
export const loginRequest = async ({ username, password }) => {

    try {
        let request = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        let status = request.status;
        let data = await request.json();
        
        console.log(data, status);
        return { data, status };
    } catch (error) {
        console.log("error", error);
    }
} 


// get-user-detail request by id with access-token
export const getUserRequest = async (id, access_token) => {

    try {
        let request = await fetch(`http://127.0.0.1:5000/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${access_token}`
            },
        });

        let status = request.status;
        let data = await request.json();

        console.log(json, status);
        return { data, status };
    } catch (error) {

    }
}


// fetch-user-avatar request
export const fetchAvatarRequest = async (id, access_token) => {

    try {

        const request = await fetch(`http://127.0.0.1:5000/avatar/${id}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${access_token}`
            }
        });

        const status = request.status;

        return status;
    } catch (error) {
        console.log("error", error);
        return error;
    } 
}

