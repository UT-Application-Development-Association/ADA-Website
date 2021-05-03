import React from "react";

import Heading from "../Heading";
import GongZhongHaoArticle from "./GongZhongHaoArticle";

export default function GongZhongHao(props) {
    return (
        <div className="gzh-container container">
        <Heading text="公众号" />
            <GongZhongHaoArticle id={0} />
            <GongZhongHaoArticle id={1} />
            <GongZhongHaoArticle id={2} />
        </div>
    );
}
