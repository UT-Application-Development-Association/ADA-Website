import React from "react";


export default function DanmakuItem(props) {
    return (
        <div className="danmaku-item">
            <span className="name">{props.name}: </span>
            <span className="comment">{props.comment}</span> 
        </div>
    );
}