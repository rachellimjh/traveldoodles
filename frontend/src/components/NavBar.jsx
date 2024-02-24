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
                <Link to={"/Home"}><button className="home">HOME</button></Link>
                <Link to={"/aboutPage"}><button className="about" >ABOUT</button></Link>
                <Link to={"/"}> <button className="login">LOGOUT</button></Link>
                <Link to={"/explorePage"}><button className="discover">DISCOVER</button></Link>
                <Link to={"/mapPage"}><button className="globe">
                    <img src={globeImage} alt ="globe-icon"/> 
                </button></Link>
            </div>
        </div>
    )
}
