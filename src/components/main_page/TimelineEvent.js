import React from "react";

export default function TimelineEvent(props) {
  return (
    <div className="timeline-event">
      <div className="event-name">
        {props.name}
      </div>
      <div className="circle-on-bar"></div>
      <div className="circle-event-connection"></div>
      <a href={props.eventUrl}>
        <div className="event-picture">
          <img src={props.pictureUrl} alt={props.name}></img>
        </div>
      </a>
    </div>
  );
}
