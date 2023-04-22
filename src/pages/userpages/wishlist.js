import { useState, useEffect } from 'react';
import api from '../../utils/api';
import { useParams, Link } from 'react-router-dom';

import api from '../../utils/api';
import axios from 'axios';
// load user wishlist if user found
// else render register page
// JESS working on the layout 


const Wishlist = (props) => {

    const pageIcons = () => {
    return(
    <>
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

   const baseURL = process.env.REACT_APP_API_URL
   const [wishlistData, setWishlistData] = useState([]);

   const { wishlistId } = useParams();

   useEffect(() => {
    fetchWishlist(wishlistId)
  }, [wishlistId]);
   //function once we get the data
   const fetchWishlistData = async (wishlistId) => {
    try {
      const response = await api.get(`/wishlist/${wishlistId}`);
      setWishlistDat(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

    //ADD LOGIC, Conditional statements? 

    return wishlistData.map((wishlistData) => (
        <div>
            <h1>{hotels}</h1>
            <h1>{restaurants}</h1>
        </div>
   

    ));
   };


    return (
        <div>
        {pageIcons()}
        </div>

        



)

export default Wishlist;


