import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

console.log(axios.defaults.baseURL);
