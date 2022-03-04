import axios from "axios";

const axiosInst = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`,
    params: {
        'api-key': "24ff1b5a2c9c6d1a26d71db19bb7ac88"
    }
});

export default axiosInst;