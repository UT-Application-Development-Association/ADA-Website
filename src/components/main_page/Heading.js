import React from "react";

export default function Heading(props) {
    return (
        <div className="heading-container">
        { props.white !== "true" && (
            <div>
                <div className="heading">
                    {props.text}
                </div>
                <div className="heading-line"></div>
            </div>
        )}

        { props.white === "true" && (
            <div>
                <div className="heading white">
                    {props.text}
                </div>
                <div className="heading-line white"></div>
            </div>
        )}
        </div>
    );
}