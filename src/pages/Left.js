import React from "react";
import { ArrowRightSquare } from "react-bootstrap-icons";
import FullTimeline from "../components/left_page/FullTimeline.js";
import Danmaku from "../components/left_page/Danmaku.js";
import Particles from "react-particles-js";


export default function Left(props) {
  return (
    <div className="left-page">
      {!props.isMobile && (
        <ArrowRightSquare
          className="left-arrow-button nav"
          onClick={() => props.setCurrPage("Main")}
          color="white"
        />
      )}

      <section className="full-timeline-section">
        <FullTimeline />
      </section>
      <section className="danmaku-section">
        <Danmaku />
      </section>

      <Particles className="particles"
        params={{
          particles: {
            number: {
              value: 150,
            },
            color: {
              value: "#fff"
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 1
              }
            },
            line_linked: {
              enable: true
            }
          }
        }}
      />
    </div>
  );
}
