import React from 'react';
import "../components/css/NavBar.css"
import travel from "../../public/images/travel.png"

export default function NavBar(){
    return(
    <nav className="bar-wrapper">
        <div className="traveldoods">
        <div className="logo">
            <img src={travel} alt="logo-icon" />
        </div>
            <h3 className="travelDoodles">TravelDoodles    </h3>
        <div className="tab-wrapper">
            <button className="home">HOME</button>
            <button className="about">ABOUT</button>
            <button className="login">LOGIN</button>
            <button className="discover">DISCOVER</button>
        </div>
    {/* <div className="logo">
            <img src={travel} alt="logo-icon" />
          </div> */}
        </div>
    </nav>

    )
}
