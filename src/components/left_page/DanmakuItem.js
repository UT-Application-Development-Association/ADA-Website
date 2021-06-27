import React from "react";


export default function DanmakuItem(props) {
    if (props.url) return (
        <a href={props.url}>
            <div className="danmaku-item">
                <span className="name" href="{props.url}">{props.name}: </span>
                <span className="comment">{props.comment}</span> 
            </div>
        </a>
    );
    else return (
        <div className="danmaku-item">
            <span className="name" href="{props.url}">{props.name}: </span>
            <span className="comment">{props.comment}</span> 
        </div>
    );
}