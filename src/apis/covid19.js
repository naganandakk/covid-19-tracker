import axios from 'axios';

const client = axios.create({
    baseURL: "https://api.covid19api.com"
})

export default client;