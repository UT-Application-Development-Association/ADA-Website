import React from "react";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import IntroSection from "../components/main_page/IntroSection";
import GongZhongHao from "../components/main_page/GongZhongHao/GongZhongHao.js";
import Timeline from "../components/main_page/Timeline.js";
import Footnote from "../components/main_page/Footnote";

export default function Main(props) {
  return (
    <div>
      {/* If in browser, display arrow button */}
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
      <section className="intro-section">
        <IntroSection/>
      </section>
      <section className="departments-section"></section>
      <section className="gzh-section">
        <GongZhongHao text="公众号" />
        <div></div>
      </section>
      <section className="timeline-section">
        <Timeline/>
      </section>
      <section className="timeline-section"></section>
      <footer className='footnote'>
        <Footnote />
      </footer>
    </div>
  );
}
