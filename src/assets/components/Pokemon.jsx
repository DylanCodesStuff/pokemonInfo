import React from "react";

import axios from "axios";
import "../styles/pokemon.css";
import CollapsableContent from "./CollapsableContent"; // Used to make the drop down tabs (ex. type(s), height)
import getTypeFunction from "../getTypeFunction"; //Used to set the background color based on primary pokemon type

export default function Pokemon() {
  //Screen before any search or if pokemon doesn't exist.
  const placeholderImg =
    "https://freepngimg.com/thumb/pokemon/20090-7-pokemon-ash-hd.png";
  const [inputPokemon, setInputPokemon] = React.useState(""); //Search Bar data
  const [result, setResult] = React.useState(undefined); //Data received from axios request
  const [requestError, setRequestError] = React.useState(false); // Used to set a message if request fails
  function cleanInput(str) {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  }

  //Takes a color input and changes the background to it.
  function setColor(color) {
    document.documentElement.style.setProperty("--color-background", color);
  }
  //Retrieves color based on pokemon type.
  function getColor(elementType) {
    return getTypeFunction(elementType);
  }

  //Takes the returned data and gives it a capital first letter.
  const toCapitalized = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  //When someone presses enter to search -> fires off the axios fetch and resets the search bar.
  function handleKeyDown(e) {
    if (e.key == "Enter") {
      fetchPokemon();
      setInputPokemon("");
    }
  }

  //Axios request to get data. Stores in state variable result. Also stores the color based on type.
  async function fetchPokemon() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${cleanInput(inputPokemon)}`
      );
      setResult(response.data);
      setRequestError(false);
      setColor(getColor(response.data.types[0].type.name));
      //   console.log(response.data);
    } catch (error) {
      setResult(undefined);
      setRequestError(true);
      console.error(error);
    }
  }

  return (
    <>
      <div className="pokemon-input-container">
        <h3>Search for Details about your Favorite Pokemon!</h3>
        <br></br>
        <input
          className="pokemon-input"
          type="text"
          placeholder="Input Pokemon Name"
          onChange={(e) => setInputPokemon(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputPokemon}
        />
      </div>
      {/* Ensures that result is not undefined before trying to process */}
      {result ? (
        <div className="pokemon-output-container">
          <div className="sprite-container">
            {result.sprites.front_default ? (
              <img className="sprite" src={result.sprites.front_default} />
            ) : (
              "No Image"
            )}
          </div>
          <div className="name data-container">
            Name - {toCapitalized(result.name)}
          </div>

          <CollapsableContent
            title="Type(s)"
            data={result.types}
            keyWord="type"
            keyWordTwo="name"
          />
          <CollapsableContent
            title="Height"
            data={(result.height * 0.32808389).toFixed(1) + " Feet"}
          />
          <CollapsableContent
            title="Weight"
            data={(result.weight * 0.220462).toFixed(1) + " Pounds"}
          />
          <CollapsableContent
            title="Possible Moves"
            data={result.moves}
            keyWord="move"
            keyWordTwo="name"
          />
          <CollapsableContent
            title="Abilities"
            data={result.abilities}
            keyWord="ability"
            keyWordTwo="name"
          />
        </div>
      ) : (
        // If no result, we'll just display the placeholder. Will not run unless axios throws error.
        <div className="placeholder-container">
          {requestError ? (
            <p>Let's try again! I couldn't find that one!</p>
          ) : null}
          <img className="placeholderImage" src={placeholderImg} />
        </div>
      )}
    </>
  );
}
