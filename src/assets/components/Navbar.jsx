import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  const iconImg = "https://pngimg.com/uploads/pokemon/pokemon_PNG146.png";
  return (
    <div className="navbar">
      <div className="left">
        <Link className="pikachu" to="/">
          <img src={iconImg} className="pikachu-logo" />
        </Link>
        <p className="logo-text">
          <Link className="pokemon-paradise" to="/">
            Pokemon Paradise
          </Link>
        </p>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/berries">Berries</Link>
        <a>Moves</a>
      </div>
    </div>
  );
}
