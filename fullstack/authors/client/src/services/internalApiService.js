import axios from 'axios';

const http = axios.create({
    baseURL: 'http://127.0.0.1:8001/api'
});

export const getAllAuthors = async () => {
    const res = await http.get('/authors');
    return res.data;
}

export const getOneAuthor = async (id) => {
    const res = await http.get(`/authors/${id}`);
    return res.data;
}

export const createAuthor = async (data) => {
    const res = await http.post('/authors', data);
    return res.data;
}

export const updateAuthor = async (data) => {
    const res = await http.put(`/authors/${data._id}`, data);
    return res.data;
}

export const deleteAuthor = async (id) => {
    const res = await http.delete(`/authors/${id}`);
    return res.data;
}

