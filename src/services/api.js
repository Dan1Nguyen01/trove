import axios from "axios"

const httpClient = axios.create ({
    baseURL: "http://localhost",
    timeout: 3 * 1e3
})

export async function getUser(params) {
    try{
        const res = await httpClient.get('/api/user', params);
        return res.data;
    } catch (err) {
        console.log(err)
    }
}