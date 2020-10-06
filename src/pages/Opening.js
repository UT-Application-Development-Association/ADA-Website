import React from "react";

export default function Opening(props) {
  return (
    <div>
      Page Opening
      <button className="opening-to-main-button" onClick={() => props.setCurrPage("Main")}>To main</button>
    </div>
  );
}
