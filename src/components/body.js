//create body of explore page with all attractions/hotels/restaurants

import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Body = (props) => {
    const loc = useLocation();
    const searchQuery = new URLSearchParams(loc.search).get('city');

    if (loc.pathname === '/') {
        return null;
    }
    else {
        return (
            <div>
                <h1>asdf</h1>
                {/* {searchQuery ? <h2> Body.js </h2> : null } */}
            </div>
        )
    }
}

//|| `/explore?city=${searchQuery}`

export default Body;