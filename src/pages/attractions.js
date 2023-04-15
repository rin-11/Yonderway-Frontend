import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const Attractions = (props) => {
    // Retrieve the searchQuery parameter from the URL using the useParams hook
    const { searchQuery } = useParams();
    
    return (
     <div>
        {searchQuery ? null : <h1> Attractions.js </h1> }
        
     </div>
    )

}

export default Attractions;
