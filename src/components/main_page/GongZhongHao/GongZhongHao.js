import React from "react";

import GongZhongHaoArticle from "./GongZhongHaoArticle";

export default function GongZhongHao(props) {
    return (
        // <div className="gzh-container">
        // </div>
        <div className="MainGrid">
            <GongZhongHaoArticle id={0} />
            <GongZhongHaoArticle id={1} />
            <GongZhongHaoArticle id={2} />
        </div>
    );
}
