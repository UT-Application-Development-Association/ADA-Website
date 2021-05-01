import React from "react";


export default function FullTimelineEvent(props) {
    return (
        <div className="timeline-event d-flex flex-lg-row flex-column">
            <div className="img-container mx-auto m-2 col-lg-4 col-10s">
                <a href={props.url} className="mx-auto">
                    <img src={props.img} alt={props.name} className="mx-auto"/>
                </a>
            </div>
            <div className="info-container mx-auto col-lg-8 col-sm-8 p-2">
                <a href={props.url}>
                    <h3 className="name">{props.name}</h3>
                </a>
                <h5 className="date">{props.date}</h5>
                <div className="description">
                    {props.description}
                </div>
            </div>
        </div>
    );
}