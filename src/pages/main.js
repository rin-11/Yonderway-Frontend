import { useState } from 'react';
import { Axios } from 'axios';

// npm install google-maps-react
// import { Map, GoogleApiWrapper } from 'google-maps-react';
//Display Search by Image and Search Bar 

const Main = (props) => {


const handleClick =(event)=> {
  event.preventDefault();
  console.log('image clicked')
}

//images shown in the main page 
const imgGallery = () => {
  return (
      <div className="img-main">
      <a href="" onClick={handleClick}>
          <img src="https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_2045606852.jpg" alt="destination1" />
      </a>
      <a href="" onClick={handleClick}>
      <img src="https://www.travelanddestinations.com/wp-content/uploads/2019/03/Switzerland-Landscapes.jpg"alt="destination1" />
      </a>
      <a href="" onClick={handleClick}>
      <img src="https://boraboraphotos.com/wp-content/uploads/2012/12/four-seasons-resort-bora-bora-mt-otemanu.jpg" alt="destination3" />
      </a>
      <a href="" onClick={handleClick}>
          <img src="https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg" alt="destination4" />
      </a>
      </div>
  );
};




    const [searchQuery, setSearchQuery] = useState('');
    const [destination, setDestination] = useState(null);
    const [restaurants, setRestaurants] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };



  // Define a function to handle the search button click
  const handleSearch = async () => {
    try {
      // Send a request to the backend API to get restaurants for the search query
      const response = await Axios.get(`/destinations/${searchQuery}`);
      setRestaurants(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
        <h1>Search by City</h1>
      <div>
        <input type="text" placeholder = "Enter your destination" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* <Map google={props.google} center={destination} /> */}
      {imgGallery()}
    </div>
  );
}

export default Main;

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_API_KEY'
// })(Main);