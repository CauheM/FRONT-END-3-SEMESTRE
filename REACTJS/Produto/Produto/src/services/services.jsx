import axios from "axios";

//porta da API
const apiPort = "3000"
//define a URL base
const localAPI = `http://localhost:${apiPort}`
//define variavel para API externa
const eternelAPI = null

const API = axios.create({
    baseURL: localAPI
})

export default API
