import { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const Main = (props) => {
  // Declare state variables for search query and destinations
  const [searchQuery, setSearchQuery] = useState('');
  const [destinations, setDestinations] = useState([]);

  // Fetch destinations on component mount using useEffect
  useEffect(() => {
    fetchDestinations();
  }, []);

  // Function to fetch destinations using the API
  const fetchDestinations = async () => {
    try {
      // Send GET request to the /destinations/random-photos endpoint
      const response = await api.get('/destinations/random-photos');
      console.log(response.data);
      // Update destinations state with the received photos
      setDestinations(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to render restaurant data
  const renderRestaurants = () => {
    // Map through the restaurants array and return a div element with restaurant details for each restaurant
    return restaurants.map((restaurant, index) => (
      <>
      <div className='activity_container' key={index}>
        {/* Check if a photo is available for the restaurant, and render it if it exists */}
        {restaurant.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Restaurant" className='activities' />
        ) : null}
       <h2>{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        {/* <p>Description: {restaurant.description}</p> */}
      </div>
      </>
    ));
  };

  return (
    <div>
      <h1>Search by City</h1>
      <div>
        {/* Input field for entering the destination city */}
        <input type="text" placeholder="Enter your destination" value={searchQuery} onChange={handleInputChange} />
        {/* Link component from react-router-dom to navigate to the city page with the searchQuery as a URL parameter */}
        <Link to={`/city/${searchQuery}`}><button>Search</button></Link>
      </div>
      {/* Render destination images only if the destinations array has data */}
      {destinations.length > 0 ? renderDestinations() : null}
    </div>
  );
};

export default Main;
