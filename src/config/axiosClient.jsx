import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://localhost:4000/depacomp-api/v1`
    // baseURL: `${process.env.BACKEND_URL}${process.env.BACKEND_VERSION}`
})

export default axiosClient;