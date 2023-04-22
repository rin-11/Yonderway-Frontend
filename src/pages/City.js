// Import necessary hooks and utilities
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// Define the City functional component
const City = (props) => {
  // Declare state variables for hotels, restaurants, and attractions with initial empty arrays
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [showHotels, setShowHotels] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showAttractions, setShowAttractions] = useState(false);

  // Get cityId from URL parameters using useParams hook
  const { cityId } = useParams();

  // Fetch data on component mount and when cityId changes
  useEffect(() => {
    fetchHotels(cityId);
    fetchRestaurants(cityId);
    fetchAttractions(cityId);
  }, [cityId]);

  // Define an async function to fetch hotel data for a specific city
  async function fetchHotels(city) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/hotels/${city}`);
      setHotels(response.data.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  }
  
  async function fetchRestaurants(city) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${city}`);
      console.log("Fetched restaurants data:", response.data); // Add this line for debugging
      setRestaurants(response.data.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  
  

  // Define an async function to fetch attraction data for a specific city
  const fetchAttractions = async (city) => {
    try {
      const response = await api.get(`/attractions/${city}/tourist_attraction`);
      setAttractions(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleHotels = () => {
    setShowHotels(!showHotels);
  };

  const toggleRestaurants = () => {
    setShowRestaurants(!showRestaurants);
  };

  const toggleAttractions = () => {
    setShowAttractions(!showAttractions);
  }

  const toggleHotelWish = (index) => {
    const newHotels = [...hotels];
    newHotels[index].isWished = !newHotels[index].isWished;
    setHotels(newHotels);
  };

  const toggleRestaurantWish = (index) => {
    const newRestaurants = [...restaurants];
    newRestaurants[index].isWished = !newRestaurants[index].isWished;
    setRestaurants(newRestaurants);
  };

  const toggleAttractionWish = (index) => {
    const newAttractions = [...attractions];
    newAttractions[index].isWished = !newAttractions[index].isWished;
    setAttractions(newAttractions);
  };

  //POP-UP Notification
       const [showPopUp, setShowPopUp] = useState(true);
       //hide message
       const handleCloseBttn = () => {
           setShowPopUp(false);
       }

       //show message 
       const handleOpen = () => {
         setShowPopUp(true)
       }




  // Render hotels as JSX elements
  const renderHotels = () => {
    return hotels.map((hotel, index) => (
      <div className='activity_container' key={index}>

        {/* Display white hearts on all imgs
             change heart to red only if the user signs in 
             else continue without this option
        */}

        {/* will need this function once user signs in */}
        {/* <button className='add-wish' onClick={() => toggleHotelWish(index)}>
        <img
            src={
              hotel.isWished
                ? 'https://whatemoji.org/wp-content/uploads/2020/07/Red-Heart-Emoji.png'
                : 'https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png'
            }
            id='star1'
            alt='Add to wishlist'
          />
        </button> */}

        <button className='add-wish' onClick={handleOpen}>
        <img src='https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png' id="star1"/>
        </button>
        <div>
         {showPopUp && (
          <div className='popup-container'>
          <div className='popup-box'>
          <h5 className='popup-h1'>Welcome to Yonderway</h5>
          <h1 className='popup-header'> Register or Login to access your wishlist</h1>
          <Link to='/register'>
          <button className='pop-bttn'>Sign up</button>
          </Link>
          <Link to='/login'>
          <button className='pop-bttn'>Login</button>
          </Link>
          <button className="popup-close" onClick={handleCloseBttn}>X</button>
          <h5>Sign up, it's free!</h5>
          </div>
          </div>
        ) }
        </div>   


        {hotel.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Hotel" className='activities' />
        ) : null}
        <div>
          <h2 className='act-name'>{hotel.name}</h2>
          <div className='rating'>
            <img src='https://cdn-icons-png.flaticon.com/512/56/56786.png' id='star'></img> <h3 className='rating-num'>{hotel.rating}</h3>
          </div>
        </div>
        <p className='address'>Address: {hotel.description}</p>
      </div>
    ));
  };
  

  // Render restaurants as JSX elements
  const renderRestaurants = () => {
    return restaurants.map((restaurant, index) => (
      <div className='activity_container' key={index}>
        {/* <button className='add-wish' onClick={() => toggleRestaurantWish(index)}>
        <img
            src={
              restaurant.isWished
                ? 'https://whatemoji.org/wp-content/uploads/2020/07/Red-Heart-Emoji.png'
                : 'https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png'
            }
            id='star1'
            alt='Add to wishlist'
          />
        </button> */}


      <button className='add-wish' onClick={handleOpen}>
        <img src='https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png' id="star1"/>
        </button>
        <div>
         {showPopUp && (
          <div className='popup-container'>
          <div className='popup-box'>
          <h5 className='popup-h1'>Welcome to Yonderway</h5>
          <h1 className='popup-header'> Register or Login to access your wishlist</h1>
          <Link to='/register'>
          <button className='pop-bttn'>Sign up</button>
          </Link>
          <Link to='/login'>
          <button className='pop-bttn'>Login</button>
          </Link>
          <button className="popup-close" onClick={handleCloseBttn}>X</button>
          <h5>Sign up, it's free!</h5>
          </div>
          </div>
        ) }
        </div>   

{/* ///////////// */}
     
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          alt={restaurant.name} className='activities' />
        <div>
          <h2 className='act-name'>{restaurant.name}</h2>
          <div className='rating'>
            <img src='https://cdn-icons-png.flaticon.com/512/56/56786.png' id='star'></img> <h3 className='rating-num'> {restaurant.rating}</h3>
          </div>
        </div>
        <p className='address'>Address: {restaurant.description}</p>
      </div>
    ));
  };



  // Render attractions as JSX elements
  const renderAttractions = () => {
    return attractions.map((attraction, index) => (
      <div className='activity_container' key={index}>
        {/* <button className='add-wish' onClick={() => toggleAttractionWish(index)} >
        <img
            src={
              attraction.isWished
                ? 'https://whatemoji.org/wp-content/uploads/2020/07/Red-Heart-Emoji.png'
                : 'https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png'
            }
            id='star1'
            alt='Add to wishlist'
          />
        </button> */}

      <button className='add-wish' onClick={handleOpen}>
        <img src='https://static.wixstatic.com/media/4c3267_5c08fc6b68d041418784f2f223d5cf30~mv2.png' id="star1"/>
        </button>
          <div>
          {showPopUp && (
          <div className='popup-container'>
          <div className='popup-box'>
          <h5 className='popup-h1'>Welcome to Yonderway</h5>
          <h1 className='popup-header'> Register or Login to access your wishlist</h1>
          <Link to='/register'>
          <button className='pop-bttn'>Sign up</button>
          </Link>
          <Link to='/login'>
          <button className='pop-bttn'>Login</button>
          </Link>
          <button className="popup-close" onClick={handleCloseBttn}>X</button>
          <h5>Sign up, it's free!</h5>
          </div>
          </div>
        ) }
        </div>   

        {attraction.photo ? (
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photo}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt="Attraction" className='activities' />
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
    < >
      <h2 className='cityName'>Explore {cityId}</h2>
      <h2  className="subheading">Select a category to continue exploring...</h2>
      <div className="nav-header">
      <div className="category1">
        <img src="https://static.thenounproject.com/png/1650638-200.png" id="icon" />
        <h1 className='category' onClick={toggleHotels}>HOTELS</h1>
      </div>
      {/* Render hotels if there are any */}
      {showHotels && hotels.length > 0 ? renderHotels() : null}
      <div className="category1">
        <img src="https://static.thenounproject.com/png/1062711-200.png" id="icon"/>
        <h1 className="category" onClick={toggleRestaurants}>RESTAURANTS</h1>
      </div>
      {/* Render restaurants if there are any */}
      {showRestaurants && restaurants.length > 0 ? renderRestaurants() : null}

      <div className="category1">
        <img src="https://static.thenounproject.com/png/4538455-200.png" id="icon" />
        <h1 className="category" onClick={toggleAttractions}>ATTRACTIONS</h1>
      </div>
      {/* Render attractions if there are any */}
      {showAttractions && attractions.length > 0 ? renderAttractions() : null}
      </div>
    </>
  );
};

// Export City component as default
export default City;
