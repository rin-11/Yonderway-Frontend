import { Link } from "react-router-dom";

//this page will handle the data returned from the API and render the search bar while displaying a list of results 
//import useState
import { useState, useEffect } from "react";

//searchForm allows the user to search for data; whenever the user submits the search; the function below will be called with the data from the API
import SearchForm from "../components/searchBar";



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
    

    const loaded = () => {
    return (
        <div className="main-container">
        {imgGallery()}
        <SearchForm />
            <h1 key={props.id}>{props.name}</h1>
        </div>
        )};

      //function to return loading JSX
    const loading = () => {
        return <h1>No Destination to display</h1>;
    };
    return props ? loaded() : loading();
};


export default Main;


