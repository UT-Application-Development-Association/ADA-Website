import React from "react";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import IntroSection from "../components/main_page/IntroSection";
import GongZhongHao from "../components/main_page/GongZhongHao/GongZhongHao.js";
import Timeline from "../components/main_page/Timeline.js";
import Footnote from "../components/main_page/Footnote";
import Department from "../components/main_page/Department.js";

export default function Main(props) {
  return (
    <div className="main-page">
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
      <section className="intro-section" id="intro">
        <IntroSection />
      </section>
      <section className="department-section" id="departments">
        <Department />
      </section>
      <section className="gzh-section" id="gzh">
        <GongZhongHao text="公众号" />
        <div></div>
      </section>
      <section className="timeline-section" id="timeline">
        <Timeline />
      </section>
      <footer className='footnote' id="contacts">
        <Footnote />
      </footer>
    </div>
  );
}
