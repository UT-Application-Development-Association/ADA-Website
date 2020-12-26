import React from "react";

export default function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="heading-container container timeline">
                <div className="heading white">TIMELINE</div>
                <div className="heading-line white"></div>
                <div className="timeline-bar"></div>
                <div className="timeline-content">
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 01</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 02</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 03</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 04</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 05</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-name"><p>Event 06</p></div>
                        <div className="circle-on-bar"></div>
                        <div className="circle-event-connection"></div>
                        <div className="event-picture"></div>
                    </div>
                </div>
            </div>   
        </div>
    );
}
