import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from '../../utils/api';
import axios from 'axios';
// load user wishlist if user found
// else render register page
// JESS working on the layout 


const Wishlist = (props) => {
    const { name } = useParams();
   
   const pageIcons = () => {
    return(
    <>
    <h3>{name}'s Wishlist</h3>
    <div>
    <h3 className="category"> Hotels </h3>
        <img src="https://static.thenounproject.com/png/1650638-200.png" id="icon"/>
    </div>
    <div>
    <h3 className="category"> Attractions </h3>
        <img src="https://static.thenounproject.com/png/4538455-200.png" id="icon" />
    </div>
    <div>
    <h3 className="category"> Restaurants </h3>
        <img src="https://static.thenounproject.com/png/1062711-200.png" id="icon" />
    </div>
    </>
   )}

   //State to hold the data
   const [restaurants, setRestaurants] = useState('');
   const [attractions, setAttractions] = useState('');
   const [hotels, setHotels] = useState('');

   //call API 

   //function once we get the data
   const showhotels = () => {

    //ADD LOGIC, Conditional statements? 

    return hotels.map((hotels) => (
        <div>
            <h1>{hotels.photo}</h1>
            <h1>{hotels.name}</h1>
        </div>
   

    ));
   };


    return (
        <div>
        {pageIcons()}
        </div>

        



)}

export default Wishlist;


