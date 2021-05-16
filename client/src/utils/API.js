import axios from "axios";
axios.defaults.withCredentials = true;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveUser: function(userData) {
        
        return axios.post("/api/user/register", userData);
        
    } 
}