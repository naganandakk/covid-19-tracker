import axios from 'axios';

const client = axios.create({
    baseURL: "https://covid-193.p.rapidapi.com"
})

client.interceptors.request.use((request) => {
    request.headers["x-rapidapi-host"] =  "covid-193.p.rapidapi.com";
    request.headers["x-rapidapi-key"] = "c70fc1a073msha3436ddc701e093p1fa48fjsncc32806fee38";

    return request;
});

export default client;