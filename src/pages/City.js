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
      <div key={index}>
        <h2>{hotel.name}</h2>
        <p>Rating: {hotel.rating}</p>
        <p>Description: {hotel.description}</p>
        {hotel.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Hotel" />
        ) : null}
      </div>
    ));
  };

  // Render restaurants as JSX elements
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

  
  // Render attractions as JSX elements
  const renderAttractions = () => {
    return attractions.map((attraction, index) => (
      <div key={index}>
        <h2>{attraction.name}</h2>
        <p>Rating: {attraction.rating}</p>
        <p>Description: {attraction.description}</p>
        {attraction.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Attraction" />
        ) : null}
      </div>
    ));
  };

  // Return the rendered JSX with hotels, restaurants, and attractions
  return (
    <div>
      <h1>Hotels</h1>
      {/* Render hotels if there are any */}
      {hotels.length > 0 ? renderHotels() : null}
      
      <h1>Restaurants</h1>
      {/* Render restaurants if there are any */}
      {restaurants.length > 0 ? renderRestaurants() : null}

      <h1>Attractions</h1>
      {/* Render attractions if there are any */}
      {attractions.length > 0 ? renderAttractions() : null}
    </div>
  );
};

// Export City component as default
export default City;
