import { useState } from 'react';
import api from '../utils/api';

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/restaurant/${searchQuery}`);
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
      <h1>Search by City</h1>
      <div>
        <input type="text" placeholder="Enter your destination" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {restaurants.length > 0 ? renderRestaurants() : null}
    </div>
  );
};

export default Main;
