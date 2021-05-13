import React from "react";
import { ArrowLeftSquare } from "react-bootstrap-icons";
import Gallery from "../components/right_page/Gallery";

export default function Right(props) {
  return (
    <div className="right-page">
      {!props.isMobile && (
        <ArrowLeftSquare
          className="right-arrow-button"
          onClick={() => props.setCurrPage("Main")}
        />
      )}

      <section className="gallery-section">
        <Gallery />
      </section>
    </div>
    
  );
}
