import axios from "axios";
axios.defaults.withCredentials = true;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveUser: function(userData) {
        
        return axios.post("/api/user/register", userData);
        
    },

    currentSession: function(session) {
        return axios.get('/api/user/current-session', session)
    },

    loginUser: function(userData) {
        return axios.post('/api/user/login', userData)
    }
}