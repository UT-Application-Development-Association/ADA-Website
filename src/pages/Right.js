import React from "react";
import { ArrowLeftSquare } from "react-bootstrap-icons";
import Gallery from "../components/right_page/Gallery";

export default function Right(props) {
  return (
    <div>
      Page Right
      {!props.isMobile && (
        <ArrowLeftSquare
          className="right-arrow-button"
          onClick={() => props.setCurrPage("Main")}
        />
      )}

      <section className="gallery-section">
        <Gallery />
        <div></div>
      </section>
    </div>
    
  );
}
