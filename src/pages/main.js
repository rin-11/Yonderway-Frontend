import { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await api.get('/destinations/random-photos');
      console.log(response.data);
      setDestinations(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const renderDestinations = () => {
    return destinations.map((destination, index) => (
      <div key={index}>
        <img src={destination} alt="Destination" />
      </div>
    ));
  };

  return (
    <div>
      <h1>Search by City</h1>
      <div>
        <input type="text" placeholder="Enter your destination" value={searchQuery} onChange={handleInputChange} />
        <Link to={`/restaurants?city=${searchQuery}`}><button>Search</button></Link>
      </div>
      {destinations.length > 0 ? renderDestinations() : null}
    </div>
  );
};

export default Main;
