import React from 'react';
import {Link} from "react-router-dom"
import "../components/css/NavBar.css"
import travel from "../../public/images/travel.png"
import globeImage from "../../public/images/earth.png"



export default function NavBar(){
    return(
        <div className = "navbar-wrapper">
            <div className="traveldoodles-wrapper">
            <div className="logo">
                  <img src={travel} alt="logo-icon" />
                 </div>
                <h2 className="websitename">TravelDoodles</h2>
                
            </ div>
           
            <div className="navbar-btns">
                <button className="home"></button>
                <button className="about" ></button>
                <button className="login"></button>
                <button className="discover"></button>
                <button className="globe">
                </button>
            </div>
        </div>
    )
}