import React from "react";
import Particles from "react-particles-js";
import { ArrowDownCircle } from "react-bootstrap-icons";
import logo from "../assets/img/2017_white-logo-text.png";

export default function Opening(props) {
  return (
    <div className="opening-page">
      <div className="bg-video-container">
      {!props.isMobile && (
        <Particles  id="particles-js"
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
                            speed: 3
                        }
                    },
                 }  
          }}
        />
      )}
      {props.isMobile && (
        <Particles  id="particles-js"
          params={{
            particles: {
                    number: {
                        value: 50,
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
                            speed: 3
                        }
                    },
                 }  
          }}
        />
      )}
        
        {/* <div className="overlay"></div> */}
        {/* <iframe src="https://www.youtube.com/embed/WEIZdab6ns8?loop=1&controls=0&autoplay=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&playlist=WEIZdab6ns8" title="UTADA PV" frameBorder="0" allow="autoplay; encrypted-media; gyroscope;"></iframe> */}
      </div>
      <img className="logo" src={ logo } alt=""></img>
      <ArrowDownCircle className="opening-to-main-button nav" color="white" onClick={() => props.setCurrPage("Main")} />
    </div>
  );
}
