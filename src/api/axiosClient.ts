import axios from "axios"

export const apiConfig = {
    // baseUrl: 'https://jsonplaceholder.typicode.com/',
    baseUrl: 'https://pokeapi.co/api/v2/'
}

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default axiosClient