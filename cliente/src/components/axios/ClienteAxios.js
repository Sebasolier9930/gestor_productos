import axios from 'axios'

const clienteAxios = axios.create({
    headers : {'Content-Type': 'multipart/form-data'},
    baseURL : 'https://storsjo.onrender.com/'
});

export default clienteAxios;
