import axios from 'axios';

const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

export const getAllProducts = async () => {
    const res = await http.get('/products');
    return res.data;
}

export const getOneProduct = async (id) => {
    const res = await http.get(`/products/${id}`);
    return res.data;
}

export const createProduct = async (data) => {
    const res = await http.post('/products', data);
    return res.data;
}

export const updateProduct = async (data) => {
    const res = await http.put(`/products/${data._id}`, data);
    return res.data;
}

export const deleteProduct = async (id) => {
    const res = await http.delete(`/products/${id}`);
    return res.data;
}

