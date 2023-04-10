import { useState } from 'react';
// npm install google-maps-react
// import { Map, GoogleApiWrapper } from 'google-maps-react';
//Display Search by Image and Search Bar 

const Destination = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [destination, setDestination] = useState(null);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // const handleSearch = () => {
    //     const { google } = props;
    //     const service = new google.maps.places.PlacesService(document.createElement('div'));
    //     service.textSearch({ query: searchQuery }, (results, status) => {
    //         if (status === google.maps.places.PlacesServiceStatus.OK) {
    //             const { geometry: { location } } = results[0];
    //             setDestination(location);
    //         } else {
    //             console.error('Error searching for city:', status);
    //         }
    //     });
    // };

  return (
    <div>
      <div>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      {/* <Map google={props.google} center={destination} /> */}
    </div>
  );
}

export default Destination;

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_API_KEY'
// })(Destination);