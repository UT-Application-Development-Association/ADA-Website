import React from "react";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";

export default function Main(props) {
  return (
    <div>
      Page Main
      {/* If in browser, display arror button */}
      {!props.isMobile && (
        <div className="nav-arrows">
          <ArrowLeftSquare
            className="main-arrow-button main-arrow-left"
            onClick={() => props.setCurrPage("Left")}
          />
          <ArrowRightSquare
            className="main-arrow-button main-arrow-right"
            onClick={() => props.setCurrPage("Right")}
          />
        </div>
      )}
      <section className="intro-section"></section>
      <section className="departments-section"></section>
      <section className="gzh-section"></section>
      <section className="timeline-section"></section>
    </div>
  );
}
