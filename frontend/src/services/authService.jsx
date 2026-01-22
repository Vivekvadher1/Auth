import api from "./api";

export const loginUser = (data) => {
    return api.post("/auth/login", data);
};

export const registerUser = (data) => {
    return api.post("/auth/register", data);
};

export const getProfile = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    return api.get("/auth/profile", {
        headers:{
           Authorization : `Bearer ${token}`, 
        }
    });

}
