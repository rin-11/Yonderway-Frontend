import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use the REACT_APP_API_URL variable from your .env file
});

export default api;
