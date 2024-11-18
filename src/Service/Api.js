import axios from "axios";
const baseUrl = 'https://isro.vercel.app/'

const Api = axios.create({
    baseURL:baseUrl
})

export default Api