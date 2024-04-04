import axios from "axios";

export default function api() {
    return axios.create({
    baseURL: 'https://fakestoreapi.com/products',
});
}