import axios from 'axios';



// Create an instance of axios with a custom configuration
const api = axios.create({
  // Set the base URL for all API requests using the environment variable REACT_APP_API_URL
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

// Export the customized axios instance for us ein other parts of of the application
export default api;

