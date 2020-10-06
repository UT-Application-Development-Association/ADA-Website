import React from "react";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";

export default function Main(props) {
  return (
    <div>
      Page Main
      <ArrowLeftSquare className="main-arrow-button main-arrow-left" onClick={() => props.setCurrPage("Left")} />
      <ArrowRightSquare className="main-arrow-button main-arrow-right" onClick={() => props.setCurrPage("Right")} />
    </div>
  );
}
