import React from "react"
import TimelineEvent from "./TimelineEvent"

export default function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="heading-container container timeline">
                <div className="heading white">TIMELINE</div>
                <div className="heading-line white"></div>
                <div className="timeline-bar"></div>
                <div className="timeline-content">
                    <TimelineEvent name="Event 01"/>
                    <TimelineEvent name="Event 02"/>
                    <TimelineEvent name="Event 03"/>
                    <TimelineEvent name="Event 04"/>
                    <TimelineEvent name="Event 05"/>
                    <TimelineEvent name="Event 06"/>
                    <TimelineEvent name="Event 07"/>
                </div>
            </div>   
        </div>
    );
}
