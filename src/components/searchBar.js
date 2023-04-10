import React from 'react'
import {useState} from 'react'

//create state to track our search value 
// handleChange funtion to control the data

const SearchForm = (props) => {
    //state to store the data entered by the user 
    const [formData, setFormData] = useState('');

    //handleChange - updates data when typing into form 
    const handleChange = (event) => {
        const searchInput = event.target.value
        setFormData(searchInput)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(formData);
    };
    
    // const handleSubmit = async(event) => {
    //     event.preventDefault();
    //     //retrieve the data based on the user's input
    //     const response = await fetch(`https://api.example.com/search?q=${formData}`)
    //     //once receiving the data from the API, store in a state variable in the component that is using the search bar 
    //     const data = await response.json();
    //     onSearch(data)
    // };


  return (
    <div className="searchBar">
    <form onSubmit={handleSubmit}>
        <input
            type="text" placeholder="Enter your destination" 
            name="searchterm"
            onChange={handleChange}
            value={formData}
        />
        <input type="submit" value="search" />
    </form>
 </div>
  );
};


export default SearchForm;