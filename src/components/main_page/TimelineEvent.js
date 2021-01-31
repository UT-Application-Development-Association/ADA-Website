import React from "react";

export default function TimelineEvent(props) {
  return (
    <div className="timeline-event">
      <div className="event-name">
        <p>{props.name}</p>
      </div>
      <div className="circle-on-bar"></div>
      <div className="circle-event-connection"></div>
      <div className="event-picture"></div>
    </div>
  );
}
