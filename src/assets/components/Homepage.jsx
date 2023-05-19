import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import CollapsableContent from "./CollapsableContent";
export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="hero-header">
        <h1 className="hero-text">
          Looking for information on your favorite Pokemon?
        </h1>
        <h2 className="hero-text2">You've come to the right place.</h2>
      </div>
      <div className="button-container">
        <Link to="/pokemon" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}
