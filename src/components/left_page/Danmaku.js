import React from "react";

import DanmakuItem from "./DanmakuItem";
import { comments } from "../../assets/comments.js";


export default function Danmaku(props) {
    return (
        <div className="danmakus-container">
            <div className="danmakus-row">
                {   
                    comments.slice(0, Math.floor(comments.length / 2)).map((data, key) => {
                        return (
                            <DanmakuItem
                                key={key}
                                name={data.name}
                                comment={data.comment}
                                url={data.url}
                            />
                        );
                    })
                }
            </div>
            <div className="danmakus-row">
                {   
                    comments.slice(Math.floor(comments.length / 2)).map((data, key) => {
                        return (
                            <DanmakuItem
                                key={key}
                                name={data.name}
                                comment={data.comment}
                                url={data.url}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}