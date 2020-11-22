import React from "react";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import Heading from "../components/main_page/Heading";
import GongZhongHao from "../components/main_page/GongZhongHao.js";
import Footnote from "../components/main_page/Footnote";

export default function Main(props) {
  return (
    <div>
      Page Main
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
      <section className="intro-section container">
        <div>
          <Heading text="基本介绍" />
        </div>
      </section>
      <section className="departments-section"></section>
      <section className="gzh-section">
        <GongZhongHao text="公众号" />
        <div></div>
      </section>
      <section className="timeline-section"></section>
      <section className='footnote'>
        <Footnote />
      </section>
    </div>
  );
}
