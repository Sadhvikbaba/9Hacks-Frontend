import axios from "axios";

const baseURL = String(import.meta.env.VITE_URI);

const apiClient2 = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
});

const apiClient = axios.create({
    baseURL : baseURL,
    headers:{
        'Content-Type' : 'application/json'
    }
})

const handleApiResponse = (apiCall) => {
    return new Promise((resolve, reject) => {
        apiCall
            .then((res) => resolve(res.data))
            .catch((error) => {
                const errorMessage = error.response?.data?.message;
                if (errorMessage) reject(errorMessage);
                else reject("unknown error");
            });
    });
};

export const login = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/login`, {email : credentials.email , password : credentials.password} , {withCredentials:true})
);

export const logout = () => handleApiResponse(
    apiClient.post(`${baseURL}/users/logout` , {} , {withCredentials : true})
);