import React from "react";

export default function Heading(props) {
    return (
        <div className="heading-container">
            <div className="heading">
                {props.text}
            </div>
            <div className="heading-line"></div>
        </div>
    );
}