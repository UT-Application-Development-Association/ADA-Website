import React from "react";
import { ArrowLeftSquare } from "react-bootstrap-icons";

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
    </div>
  );
}
