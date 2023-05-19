import React from "react";
import "../styles/moves.css";
import axios from "axios";
import getTypeFunction from "../getTypeFunction";
export default function Moves() {
  const [inputMove, setInputMove] = React.useState("");
  const [moveResult, setMoveResult] = React.useState(undefined);
  const [requestError, setRequestError] = React.useState(false); // Used to set a message if request fails

  const placeholderImg =
    "https://poketouch.files.wordpress.com/2016/05/shiny_machamp_pokemon_artwork.png?w=584";
  async function fetchMove() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/move/${cleanInput(inputMove)}`
      );
      setMoveResult(response.data);
      setRequestError(false);
      setTypeColor(getTypeColor(response.data.type.name));
    } catch (error) {
      setMoveResult(undefined);
      setRequestError(true);
      console.error(error);
    }
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
      fetchMove();
      setInputMove("");
    }
  }
  //Adds -'s in place of spaces for our api request.
  function cleanInput(str) {
    str = str.toLowerCase().replace(/\s+/g, "-");
    return str;
  }
  //Removes the -'s that we had to apply to make the api request.
  const cleanOutput = (str) => {
    let regex = /\-/g;
    return str
      .replace(regex, " ")
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  //Takes a color input and changes the background to it.
  function setTypeColor(color) {
    document.documentElement.style.setProperty(
      "--color-type-background",
      color
    );
  }
  //Retrieves color based on pokemon type.
  function getTypeColor(elementType) {
    return getTypeFunction(elementType);
  }

  return (
    <>
      <div className="move-page">
        <div className="pokemon-input-container">
          <h3>Learn about your Favorite Moves!</h3>
          <br />
          <input
            className="moves-input"
            type="text"
            placeholder="Input Move Name"
            onChange={(e) => setInputMove(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputMove}
          />
        </div>

        {moveResult ? (
          <div className="move-output-container">
            <div className="move-name">{cleanOutput(moveResult.name)}</div>
            <br></br>
            <h2>Battle Information</h2>
            <div className="accuracy-power-container">
              <div className="move-accuracy">
                Accuracy: {moveResult.accuracy}
              </div>
              <div className="move-power">Power: {moveResult.power}</div>
            </div>
            <div className="move-pp">PP: {moveResult.pp}</div>
            <div className="move-type">
              Type: {cleanOutput(moveResult.type.name)}
            </div>
            <div className="damage-class">
              Category: {cleanOutput(moveResult.damage_class.name)}
            </div>
          </div>
        ) : (
          <div className="placeholder-container">
            {requestError ? (
              <p>Let's try again! I couldn't find that one!</p>
            ) : null}
            <img className="placeholderImage" src={placeholderImg} />
          </div>
        )}
      </div>
    </>
  );
}
