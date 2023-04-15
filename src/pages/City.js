import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useParams } from 'react-router-dom';

const City = (props) => {
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const { cityId } = useParams();

  useEffect(() => {
    fetchHotels(cityId);
    fetchRestaurants(cityId);
    fetchAttractions(cityId);
  }, [cityId]);

  const fetchHotels = async (city) => {
    try {
      const response = await api.get(`/hotel/${city}`);
      setHotels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRestaurants = async (city) => {
    try {
      const response = await api.get(`/restaurant/${city}`);
      setRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAttractions = async (city) => {
    try {
      const response = await api.get(`/attractions/${city}/tourist_attraction`);
      setAttractions(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  

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

  return (
    <div>
      <h1>Hotels</h1>
      {hotels.length > 0 ? renderHotels() : null}
      <h1>Restaurants</h1>
      {restaurants.length > 0 ? renderRestaurants() : null}
      <h1>Attractions</h1>
      {attractions.length > 0 ? renderAttractions() : null}
    </div>
  );
};

export default City;





