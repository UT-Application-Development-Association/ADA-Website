import React from "react";

export default function Opening(props) {
  return (
    <div class="Container">
      <img class="BackgroundImage" src={require('../imgs/5s.gif')}></img>
      <img class="Logo" src={require('../imgs/MainLogo.png')}></img>
      <button className="opening-to-main-button" onClick={() => props.setCurrPage("Main")}>To main</button>
    </div>
  );
}
