import React from "react";

import Heading from "../Heading";
import GongZhongHaoArticle from "./GongZhongHaoArticle";

import qrImg from "../../../assets/img/qrcode.jpg";
import img0 from "../../../assets/img/gongzhonghao/0.jpg";
import img1 from "../../../assets/img/gongzhonghao/1.jpg";
import img2 from "../../../assets/img/gongzhonghao/2.jpg";

export default function GongZhongHao(props) {
    return (
        <div className="container">
            <Heading text="公众号" white="true" />
            <div className="gzh-container">
                <GongZhongHaoArticle id={0} image={img0}/>
                <GongZhongHaoArticle id={1} image={img1} />
                <GongZhongHaoArticle id={2} image={img2}/>
                <div className="QR-container">
                    <img src={qrImg} alt="多大助手" />
                </div>
            </div>
        </div>
    );
}
