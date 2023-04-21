import axios from 'axios';

// Create an instance of axios with a custom configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use the REACT_APP_API_URL variable from your .env file
});

export default api;
