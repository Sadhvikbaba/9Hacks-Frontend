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

export const userLogin = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/user/login`, {...credentials} , {withCredentials:true})
);

export const userRegister = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/user/register`, {...credentials} , {withCredentials:true})
);

export const userMessage = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/user/message`, {...credentials} , {withCredentials:true})
);

export const userOutpassValidator = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/user/outpass`, {...credentials} , {withCredentials:true})
);

export const logout = () => handleApiResponse(
    apiClient.post(`${baseURL}/user/logout` , {} , {withCredentials : true})
);

export const getUser = () => handleApiResponse(
    apiClient.post(`${baseURL}/get-user` , {} , {withCredentials : true})
);

export const prevOutpass = () => handleApiResponse(
    apiClient.post(`${baseURL}/prev-outpass` , {} , {withCredentials : true})
);

export const adminDetails = () => handleApiResponse(
    apiClient.post(`${baseURL}/admin/details` , {} , {withCredentials : true})
);

export const adminLogin = () => handleApiResponse(
    apiClient.post(`${baseURL}/admin/login` , {} , {withCredentials : true})
);

export const adminRouter = () => handleApiResponse(
    apiClient.post(`${baseURL}/admin/approval` , {} , {withCredentials : true})
);

