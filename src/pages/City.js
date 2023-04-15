// Import necessary hooks and utilities
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useParams } from 'react-router-dom';

// Define the City functional component
const City = (props) => {
  // Declare state variables for hotels, restaurants, and attractions with initial empty arrays
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);

  // Get cityId from URL parameters using useParams hook
  const { cityId } = useParams();

  // Fetch data on component mount and when cityId changes
  useEffect(() => {
    fetchHotels(cityId);
    fetchRestaurants(cityId);
    fetchAttractions(cityId);
  }, [cityId]);

  // Define an async function to fetch hotel data for a specific city
  const fetchHotels = async (city) => {
    try {
      const response = await api.get(`/hotel/${city}`);
      setHotels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Define an async function to fetch restaurant data for a specific city
  const fetchRestaurants = async (city) => {
    try {
      const response = await api.get(`/restaurant/${city}`);
      setRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Define an async function to fetch attraction data for a specific city
  const fetchAttractions = async (city) => {
    try {
      const response = await api.get(`/attractions/${city}/tourist_attraction`);
      setAttractions(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Render hotels as JSX elements
  const renderHotels = () => {
    return hotels.map((hotel, index) => (
      <div className='activity_container' key={index}>
         {hotel.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Hotel"  className='activities' />
        ) : null}
        <div>
        <h2 className='act-name'>{hotel.name}</h2>
        <div className='rating'>
          <img src='https://cdn-icons-png.flaticon.com/512/56/56786.png' id='star'></img> <h3 className='rating-num'>{hotel.rating}</h3>
        </div>
        </div>
        {/* <p>Rating: {hotel.rating}</p> */}
        <p  className='address'>Address: {hotel.description}</p>
      </div>
    ));
  };

  // Render restaurants as JSX elements
  const renderRestaurants = () => {
    return restaurants.map((restaurant, index) => (
      <div className='activity_container' key={index}>
           {restaurant.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Restaurant"  className='activities'/>
        ) : null}
     <div>
        <h2 className='act-name'>{restaurant.name}</h2>
        <div className='rating'>
        <img src='https://cdn-icons-png.flaticon.com/512/56/56786.png' id='star'></img> <h3 className='rating-num'> {restaurant.rating}</h3>
        </div>
      </div>
      <p  className='address'>Address: {restaurant.description}</p>
      </div>
    ));
  };

  
  // Render attractions as JSX elements
  const renderAttractions = () => {
    return attractions.map((attraction, index) => (
      <div className='activity_container' key={index}>
         {attraction.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Attraction"  className='activities'/>
        ) : null}
      <div>
        <h2 className='act-name'>{attraction.name}</h2>
        <div className='rating'>
        <img src='https://cdn-icons-png.flaticon.com/512/56/56786.png' id='star'></img> <h3 className='rating-num'>{attraction.rating}</h3>
        </div>
      </div>
        <p className='address'>Address: {attraction.description}</p>
      </div>
    ));
  };

  // Return the rendered JSX with hotels, restaurants, and attractions
  return (
    <div >
      <h1 className='category-show'>HOTELS</h1>
      {/* Render hotels if there are any */}
      {hotels.length > 0 ? renderHotels() : null}
      
      <h1>RESTAURANTS</h1>
      {/* Render restaurants if there are any */}
      {restaurants.length > 0 ? renderRestaurants() : null}

      <h1>ATTRACTIONS</h1>
      {/* Render attractions if there are any */}
      {attractions.length > 0 ? renderAttractions() : null}
    </div>
  );
};

// Export City component as default
export default City;
