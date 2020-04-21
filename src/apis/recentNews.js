import axios from 'axios';

const apiKeys = [
    "f251266458e947ba94e465c731e10a2a",
    "afbacd1a0f8a435e8971084223998783"
]

const client = axios.create({
    baseURL: "https://newsapi.org/v2"
})

client.interceptors.request.use((request) => {
    const apiKeyIndex = Math.floor((Math.random() * apiKeys.length));
    const apiKey = apiKeys[apiKeyIndex];

    // Auth token
    request.headers.Authorization = `Bearer ${apiKey}`;

    // Default query parameters
    // const defaultQueryParams = {
    //     country: "in"
    // };
    //
    // // Add pageSize in the end
    // // It will override pageSize provided in query string
    // request.params = { ...defaultQueryParams, ...request.params, pageSize: 100 };

    return request;
});

export default client;