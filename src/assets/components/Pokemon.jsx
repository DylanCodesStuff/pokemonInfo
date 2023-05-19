import React, { useEffect } from "react";

import axios from "axios";
import "../styles/pokemon.css";
import CollapsableContent from "./CollapsableContent";

export default function Pokemon() {
  const placeholderImg =
    "https://freepngimg.com/thumb/pokemon/20090-7-pokemon-ash-hd.png";
  const [inputPokemon, setInputPokemon] = React.useState("");
  const [result, setResult] = React.useState(undefined);

  useEffect(() => {
    let color = getComputedStyle(document.documentElement).getPropertyValue(
      "--color-background"
    );
    console.log(color);
  }, [result]);

  function setColor(color) {
    document.documentElement.style.setProperty("--color-background", color);
  }
  function getColor(elementType) {
    switch (elementType) {
      case "fire":
        return "#ed7809";

      case "normal":
        return "#bab1a8";

      case "fighting":
        return "#bf9c7a";

      case "flying":
        return "#53c2cf";

      case "poison":
        return "#7d33cc";

      case "ground":
        return "#d1cfb0";

      case "rock":
        return "#dba77b";

      case "bug":
        return "#cbe670";

      case "ghost":
        return "#727596";

      case "steel":
        return "#c1d8db";

      case "water":
        return "#80a2d1";

      case "grass":
        return "#75e679";

      case "electric":
        return "#e1f296";

      case "psychic":
        return "#cd74d4";

      case "ice":
        return "#7ed3e0";

      case "dragon":
        return "#9b4ec2";

      case "dark":
        return "#5b1b7a";

      case "fairy":
        return "#d952de";
    }
  }

  const toCapitalized = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  function handleKeyDown(e) {
    if (e.key == "Enter") {
      fetchPokemon();
      setInputPokemon("");
    }
  }

  async function fetchPokemon() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`
      );
      setResult(response.data);
      setColor(getColor(response.data.types[0].type.name));
      //   console.log(response.data);
    } catch (error) {
      setResult(undefined);
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
          {/* //data-container */}
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
        <div className="placeholder-container">
          <img className="placeholderImage" src={placeholderImg} />
        </div>
      )}
    </>
  );
}
