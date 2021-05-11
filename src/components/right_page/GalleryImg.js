import React from "react";


//padding and width for image should be adjusted when replacing image source
export default function GalleryImg(props) {
    return (
        <div className="gallery-img-container" styles={props.style}>
            <img className="gallery-img" src={props.src} alt={props.text}/>
            <div className="img-caption">
                {props.text}
            </div>
        </div>
    );
}