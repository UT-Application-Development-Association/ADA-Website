import React from "react";


export default function DanmakuItem(props) {
    return (
        <div className="danmaku-item">
        <a href={props.url}>
            <span className="name">{props.name}: </span>
            <span className="comment">{props.comment}</span> 
        </a>
        
        </div>
    );
}