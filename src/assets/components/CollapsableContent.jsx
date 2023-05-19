import React, { useState, useRef } from "react";
import "../styles/collapsable.css";
import { nanoid } from "nanoid";
export default function CollapsableContent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef();
  const toCapitalized = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const cleanOutput = (str) => {
    let regex = /\-/g;
    return str
      .replace(regex, " ")
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className="collapsable">
      <div className="button-container">
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {props.title}
        </button>
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? { height: parentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className={`content ${props.keyWord}-container`}>
          <div className={props.keyWord}>
            {Array.isArray(props.data)
              ? props.data.map((item) => (
                  <div
                    key={nanoid()}
                    className={`${
                      item[props.keyWord][props.keyWordTwo]
                    } type-container`}
                  >
                    {cleanOutput(
                      toCapitalized(item[props.keyWord][props.keyWordTwo])
                    )}
                  </div>
                ))
              : props.data}
          </div>
        </div>
      </div>
    </div>
  );
}
