import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../routes/css/AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="outer">
        <div className="about-wrapper">
            <h1>About TravelDoodles</h1>
            <p className="description">
                TravelDoodles allows users to freeze their most cherished travel moments
                in time by featuring functionalities such as posting travel blogs and
                pining recent travel locations.
            </p>
        </div>
        <div className="tags">
            <h2>Different Tags:</h2>
            <p>
            JungleDoodles: For adventures
            <br />
            TruffleDoodles: For new food finds
            <br />
            SnoozerDoodles: For accommodation recommendations
            <br />
            WonderDoodles: For sightseeing spots
            <br />
            StudyDoodles: For study spots recommendations
            <br />
            FitDoodles: For outfits
            </p>
            
        </div>

      </div>

      
      
    </>
  );
}