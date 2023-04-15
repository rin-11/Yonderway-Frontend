import { useState, useEffect } from 'react'; // importing React hooks for state and side effects
import api from '../utils/api'; // importing api module for making HTTP requests
import { useParams } from 'react-router-dom'; // importing useParams hook from react-router-dom to access URL parameters

const City = (props) => { // defining a functional component called City
  const [hotels, setHotels] = useState([]); // using the useState hook to create a state for hotels
  const [restaurants, setRestaurants] = useState([]); // using the useState hook to create a state for restaurants
  const [attractions, setAttractions] = useState([]); // using the useState hook to create a state for attractions
  const { cityId } = useParams(); // using the useParams hook to get the cityId parameter from the URL

  useEffect(() => { // using the useEffect hook to perform side effects (fetching data)
    fetchHotels(cityId); // calling fetchHotels with the cityId parameter to fetch hotels data
    fetchRestaurants(cityId); // calling fetchRestaurants with the cityId parameter to fetch restaurants data
    fetchAttractions(cityId); // calling fetchAttractions with the cityId parameter to fetch attractions data
  }, [cityId]); // specifying the cityId parameter as a dependency for useEffect to run whenever it changes

  const fetchHotels = async (city) => { // defining an asynchronous function called fetchHotels to fetch hotels data
    try {
      const response = await api.get(`/hotel/${city}`); // making a GET request to the hotels endpoint with the city parameter
      setHotels(response.data.data); // setting the hotels state with the response data
    } catch (error) {
      console.error(error); // logging any errors that occur during the request
    }
  };

  const fetchRestaurants = async (city) => { // defining an asynchronous function called fetchRestaurants to fetch restaurants data
    try {
      const response = await api.get(`/restaurant/${city}`); // making a GET request to the restaurants endpoint with the city parameter
      setRestaurants(response.data.data); // setting the restaurants state with the response data
    } catch (error) {
      console.error(error); // logging any errors that occur during the request
    }
  };

  const fetchAttractions = async (city) => { // defining an asynchronous function called fetchAttractions to fetch attractions data
    try {
      const response = await api.get(`/attractions/${city}/tourist_attraction`); // making a GET request to the attractions endpoint with the city and tourist_attraction parameters
      setAttractions(response.data.data); // setting the attractions state with the response data
    } catch (error) {
      console.error(error); // logging any errors that occur during the request
    }
  };

    // define functions to render the hotel, restaurant, and attraction data

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





