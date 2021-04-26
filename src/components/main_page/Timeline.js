import React from "react"
import TimelineEvent from "./TimelineEvent"

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
                    name="Event 01" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Event 02" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Event 03" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Event 04" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Event 05" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
                    eventUrl = "https://www.google.com/"/>

                    <TimelineEvent 
                    name="Event 06" 
                    pictureUrl = "http://n.sinaimg.cn/sinacn10108/34/w500h334/20200218/7c69-iprtayz1346642.jpg" 
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