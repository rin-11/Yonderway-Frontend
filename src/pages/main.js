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

  // Function to handle input change event
  const handleInputChange = (event) => {
    // Update the search query state with the new input value
    setSearchQuery(event.target.value);
  };



//POP-UP Notification
    const [showPopUp, setShowPopUp] = useState(false);
  //hide message
    const handleCloseBttn = () => {
          setShowPopUp(false);
          //navigate to the link
          // Link component from react-router-dom to navigate to the city page with the searchQuery as a URL parameter 
          window.location.href = `/city/${searchQuery}`;
      };
  
  //show message 
      const handleOpen = () => {
        setShowPopUp(true)
      }
  

      
  // Function to render destination images
  const renderDestinations = () => {
    // Map through the destinations array and return an image element for each destination
    return destinations.map((destination, index) => (
      <div className='img-main' key={index}>
        <img src={destination} alt="Destination" className='destination'/>
      </div>
    ));
  };

  return (
    <div className='container'>
      <h1 className='explore'>Explore Destinations</h1>
      <div className='search-bar'>
        {/* Input field for entering the destination city */}
        <input type="text" placeholder="Enter your destination by City" value={searchQuery} onChange={handleInputChange} />
        {/* Link component from react-router-dom to navigate to the city page with the searchQuery as a URL parameter */}
        <button id="searchbttn" onClick={handleOpen}>SEARCH</button>
            {showPopUp && (
            <div className='popup-container'>
             
            <div className='popup-box'>
            <h5 className='popup-h1'>Welcome to Yonderway!</h5>
            <h1 className='popup-header'> Register or Login to access <br/> your wishlist</h1>
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
      {/* Render destination images only if the destinations array has data */}
      {destinations.length > 0 ? renderDestinations() : null}
    </div>
  );
};

export default Main;