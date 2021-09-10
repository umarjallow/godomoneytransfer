import axios from 'axios'

const instance = axios.create({
    baseURL: 'url',
    headers: {'Accept': 'application/json'},
    timeout: 5000 
})

export default instance