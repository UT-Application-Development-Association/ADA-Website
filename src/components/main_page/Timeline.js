import React from "react"
import TimelineEvent from "./TimelineEvent"

import Club_Carnival from "../../assets/img/Club_Carnival.png"
import new_meet from "../../assets/img/new_meet.jpeg"
import Innovation_Fair from "../../assets/img/Innovation_Fair.jpeg"
import Online_Club_Fair from "../../assets/img/Online_Club_Fair.png"
import Course_Wiki from "../../assets/img/Course_Wiki.jpeg"
import UTHack from "../../assets/img/UTHack.png"

export default function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="button-container container">
                <span className="left-button" onClick={() => move_left()}></span>
                <span className="right-button" onClick={() => move_right()}></span>
            </div>
            <div className="heading-container container timeline">
                <div className="heading white">TIMELINE</div>
                <div className="heading-line white"></div>
                <div className="timeline-bar"></div>
                <div id = "timeline-content" className="timeline-content">

                    <TimelineEvent 
                    name="Club Carnival" 
                    pictureUrl = {Club_Carnival}
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Meeting" 
                    pictureUrl = {new_meet}
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Innovation Fair" 
                    pictureUrl = {Innovation_Fair}
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Online Club Fair" 
                    pictureUrl = {Online_Club_Fair}
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Course Wiki" 
                    pictureUrl = {Course_Wiki}
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="UTHack 2021" 
                    pictureUrl = {UTHack}
                    eventUrl = "https://www.google.com/"/>
                </div>
            </div>   
        </div>
    );
}

function move_left() {
    var timeline = document.getElementById("timeline-content");
    for (var i = 0; i < 50; i++) {
        (function (t, data) {
            setTimeout(function () {
                timeline.scrollBy(-3, 0);
            }, 7 * t);
        })(i)
    }
}

function move_right() {
    var timeline = document.getElementById("timeline-content");
    for (var i = 0; i < 50; i++) {
        (function (t, data) {
            setTimeout(function () {
                timeline.scrollBy(3, 0);
            }, 7 * t);
        })(i)
    }
}