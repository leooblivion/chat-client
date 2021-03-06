import axios from "axios";

const API_URL = "http://localhost:8000/";

const register = (username, email, password) => {
    return axios.post(API_URL + "user/register", {
        username,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(API_URL + "user/login", {
        email,
        password,
    })
};

const getUser = (token, username) => {
    return axios.post(API_URL + "user", {
        username
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
};

const editUser = (token, user) => {
    return axios.post(API_URL + "user/edit", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}


const addRequest = (token, user) => {
    return axios.post(API_URL + "user/add", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteRequest = (token, user) => {
    return axios.post(API_URL + "user/delete", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const acceptRequest = (token, user) => {
    return axios.post(API_URL + "user/accept", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteFriend = (token, user) => {
    return axios.post(API_URL + "user/remove", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}


export default {
    register,
    login,
    getUser,
    editUser,
    addRequest,
    deleteRequest,
    acceptRequest,
    deleteFriend
};