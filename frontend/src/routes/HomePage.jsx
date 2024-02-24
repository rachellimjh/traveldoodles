import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../routes/css/HomePage.css"
import NavBar from "../components/NavBar";
import backgroundImage from "../../public/images/home-page-background.jpg";

export default function PostingPage() {
  const handleGoButtonClick = () => {
    // Perform actions when "Go!" button is clicked
    // Navigate to a new page, for example, "/new-adventure"
    navigate.push("/post-page");
  };

  return (
    
    <div className="outer" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <NavBar />
      <div className="bottom-buttons">
        <button className="pen-adventure-button">YOUR NEW ADVENTURE</button>
        <Link to={"/postingPage"}>
          <button className="go-button">Go!</button>
        </Link>
      </div>
    </div>
  );
}