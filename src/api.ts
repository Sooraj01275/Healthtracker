import axios from "axios"

export const API = axios.create({
    baseURL: 'https://api.rootnet.in/covid19-in'
})

export default {
    fetchGet<T = any>(url: string, params = {}) {
        return API.get<T>(url, {
            headers: {
                'Content-Type': "application/json"
            },
            params
        })
    }
}