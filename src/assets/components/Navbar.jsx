import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  const iconImg = "https://pngimg.com/uploads/pokemon/pokemon_PNG146.png";
  function resetBackground() {
    document.documentElement.style.setProperty("--color-background", "#c0ebe6");
  }
  return (
    <nav className="navbar">
      <div className="left">
        <Link className="pikachu" to="/" onClick={resetBackground}>
          <img src={iconImg} className="pikachu-logo" />
        </Link>
        <p className="logo-text">
          <Link className="pokemon-paradise" to="/" onClick={resetBackground}>
            Pokemon Paradise
          </Link>
        </p>
      </div>
      <div className="right">
        <Link to="/" className="right-text" onClick={resetBackground}>
          Home
        </Link>
        <Link to="/pokemon" className="right-text">
          Pokemon
        </Link>

        <Link to="/moves" onClick={resetBackground} className="right-text">
          Moves
        </Link>
        <Link to="/about" onClick={resetBackground} className="right-text">
          About
        </Link>
      </div>
    </nav>
  );
}
