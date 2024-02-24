import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import NavBar from "../components/NavBar";
import jungledoodles from "../../public/images/home-page-jungledoodles.jpg";
import truffledoodles from "../../public/images/home-page-truffledoodles.jpg";
import snoozerdoodles from "../../public/images/home-page-snoozerdoodles.jpg";
import studydoodles from "../../public/images/home-page-studydoodles.jpg";
import fitdoodles from "../../public/images/home-page-fitdoodles.jpg";
import wonderdoodles from "../../public/images/home-page-wonderdoodles.jpg";

export default function PostingPage() {
  const handleGoButtonClick = () => {
    // Perform actions when "Go!" button is clicked
    // Navigate to a new page, for example, "/new-adventure"
    navigate.push("/post-page");
  };

  return (
    <div className="outermost">
      <NavBar />
      <div className="bottom-buttons">
        <button className="pen-adventure-button">YOUR NEW ADVENTURE</button>
        <Link to={"/post-page"}>
          <button className="go-button">Go!</button>
        </Link>
      </div>
    </div>
  );
}
