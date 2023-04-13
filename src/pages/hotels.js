import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Hotels = (props) => {
    //return <h1>This is the Hotels Component</h1>;
    const [show, setShow] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/yonderway-backend/routes/restaurants/:city')
        .then(response => response.json())
            .then(data => setShow(data));
    }, []);

    return (
        <div>
            {show.map(activity => (
                <h1 key={activity.name}></h1>
            ))}
        </div>
    );
}

export default Hotels;

