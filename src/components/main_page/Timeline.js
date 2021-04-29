import React from "react";
import TimelineEvent from "./TimelineEvent";

import imgClubCarnival2019 from "../../assets/img/events/ClubCarnival2019.jpeg";
import imgWelcoming2019 from "../../assets/img/events/Welcoming2019.jpeg";
import imgInnovationFair2020 from "../../assets/img/events/InnovationFair2020.png";
import imgOnlineClubFair2020 from "../../assets/img/events/OnlineClubFair2020.jpeg";
import imgCourseWiki from "../../assets/img/events/CourseWiki.png";
import imgUTHack2021 from "../../assets/img/events/UTHack2021.png";

export default function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="button-container container">
                <span className="left-button" onClick={() => timelineMoveLeft()}></span>
                <span className="right-button" onClick={() => timelineMoveRight()}></span>
            </div>
            <div className="heading-container container timeline">
                <div className="heading white">TIMELINE</div>
                <div className="heading-line white"></div>
                <div className="timeline-bar"></div>
                <div id = "timeline-content" className="timeline-content">

                    <TimelineEvent 
                    name="Club Carnival 2019" 
                    pictureUrl = {imgClubCarnival2019}
                    eventUrl = "#timeline"/>

                    <TimelineEvent 
                    name="新生见面会 2019" 
                    pictureUrl = {imgWelcoming2019}
                    eventUrl = "#timeline"/>

                    <TimelineEvent 
                    name="Innovation Fair 2020" 
                    pictureUrl = {imgInnovationFair2020}
                    eventUrl = "https://if2020.uoftada.com/"/>

                    <TimelineEvent 
                    name="Online Club Fair 2020" 
                    pictureUrl = {imgOnlineClubFair2020}
                    eventUrl = "https://www.uoftclubfair.com/clubs/UTADA/"/>

                    <TimelineEvent 
                    name="Course Wiki上线" 
                    pictureUrl = {imgCourseWiki}
                    eventUrl = "https://course-wiki.uoftada.com/"/>

                    <TimelineEvent 
                    name="UTHack 2021" 
                    pictureUrl = {imgUTHack2021}
                    eventUrl = "https://www.facebook.com/UoftHacks/"/>
                </div>
            </div>   
        </div>
    );
}

function timelineMoveLeft() {
    var timeline = document.getElementById("timeline-content");
    for (var i = 0; i < 50; i++) {
        (function (t, data) {
            setTimeout(function () {
                timeline.scrollBy(-3, 0);
            }, 7 * t);
        })(i);
    }
}

function timelineMoveRight() {
    var timeline = document.getElementById("timeline-content");
    for (var i = 0; i < 50; i++) {
        (function (t, data) {
            setTimeout(function () {
                timeline.scrollBy(3, 0);
            }, 7 * t);
        })(i);
    }
}