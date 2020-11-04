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
export const getUserRequest = async (id, access_token, signal) => {

    try {
        let request = await fetch(`http://127.0.0.1:5000/user/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${access_token}`
            },
            signal
        });

        let status = request.status;
        let response = await request.json();

        return { response, status };
    } catch (error) {
        console.log("Error : ", error);
    }
}


// fetch-user-avatar request
export const fetchAvatarRequest = async (id, access_token, signal) => {

    try {

        const request = await fetch(`http://127.0.0.1:5000/avatar/${id}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${access_token}`
            },
            signal
        });

        const status = request.status;

        return status;
    } catch (error) {
        console.log("error", error);
        return error;
    } 
}


// update username request
export const updateUsernameRequest = async ({ id, email }, access_token, username) => {

    console.log("id", id, "username", username);

    try {
        const request = await fetch(`http:127.0.0.1:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${access_token}`
            },
            body: JSON.stringify({
                username,
                email
            })
        });

        const status = request.status;

        console.log(status);

        return status;

    } catch (error) {
        console.log("error : ",error);
        return error;
    }
}