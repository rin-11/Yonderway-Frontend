import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useLocation } from 'react-router-dom';

const Restaurants = (props) => {
  // Declare state variable for storing restaurant data
  const [restaurants, setRestaurants] = useState([]);
  // Get the location object from the react-router-dom library
  const location = useLocation();

  // Fetch restaurants on component mount or when the location changes
  useEffect(() => {
    // Extract the 'city' search parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');
    // If the 'city' parameter exists, fetch restaurants for the specified city
    if (city) {
      fetchRestaurants(city);
    }
  }, [location]);

  // Function to fetch restaurants data from the API
  const fetchRestaurants = async (city) => {
    try {
      // Send GET request to the /restaurant/:city endpoint
      const response = await api.get(`/restaurant/${city}`);
      // Update the restaurants state with the received data
      setRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to render restaurant data
  const renderRestaurants = () => {
    // Map through the restaurants array and return a div element with restaurant details for each restaurant
    return restaurants.map((restaurant, index) => (
      <div key={index}>
        <h2>{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        <p>Description: {restaurant.description}</p>
        {/* Check if a photo is available for the restaurant, and render it if it exists */}
        {restaurant.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Restaurant" />
        ) : null}
      </div>
    ));
  };

  return (
    <div>
      {/* Render restaurant data only if the restaurants array has data */}
      {restaurants.length > 0 ? renderRestaurants() : null}
    </div>
  );
};

export default Restaurants;
