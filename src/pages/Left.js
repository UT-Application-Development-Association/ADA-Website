import React from "react";
import { ArrowRightSquare } from "react-bootstrap-icons";
import FullTimeline from "../components/left_page/FullTimeline.js";
import Danmaku from "../components/left_page/Danmaku.js";

export default function Left(props) {
  return (
    <div className="left-page">
      {!props.isMobile && (
        <ArrowRightSquare
          className="left-arrow-button"
          onClick={() => props.setCurrPage("Main")}
        />
      )}

      <section className="full-timeline-section">
        <FullTimeline />
      </section>
      <section className="danmaku-section">
        <Danmaku />
      </section>
    </div>
  );
}
