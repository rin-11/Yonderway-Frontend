import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useLocation } from 'react-router-dom';

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');
    if (city) {
      fetchRestaurants(city);
    }
  }, [location]);

  const fetchRestaurants = async (city) => {
    try {
      const response = await api.get(`/restaurant/${city}`);
      setRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderRestaurants = () => {
    return restaurants.map((restaurant, index) => (
      <div key={index}>
        <h2>{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        <p>Description: {restaurant.description}</p>
        {restaurant.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Restaurant" />
        ) : null}
      </div>
    ));
  };

  return (
    <div>
      {restaurants.length > 0 ? renderRestaurants() : null}
    </div>
  );
};

export default Restaurants;
