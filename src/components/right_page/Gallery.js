import React from "react";
import Heading from "../../components/main_page/Heading";
import GalleryImg from "./GalleryImg";

import newyear202001 from "../../assets/img/gallery/202001-newyear202001.jpg";
import if202008 from "../../assets/img/gallery/202008-if202008.png";
import yingxin202010v1 from "../../assets/img/gallery/202010-yingxin202010_1.png";
import yingxin202010v2 from "../../assets/img/gallery/202010-yingxin202010_2.png";
import clubcarnival2019 from "../../assets/img/events/ClubCarnival2019.jpeg";
import yingxin2019 from "../../assets/img/events/Welcoming2019.jpeg";



//padding and width for image should be adjusted when replacing image source
export default function Gallery(props) {
    return (
        <div className="gallery-container container">
        
            <div className="row">
            
                <div className="col-10 col-md-6 mx-auto">
                    <Heading text="我们是谁" white="true" />
                    <div className="img-row">
                        <GalleryImg src={newyear202001} text="2020新年晚会 2020-01"/>
                    </div>
                    <div className="img-row">
                        <GalleryImg src={if202008} text="首届Innovation Fair合影 2020-08"/>
                    </div>
                    <div className="img-row">
                        <GalleryImg src={clubcarnival2019} text="Club Carnival 2019-09"/>
                    </div>
                </div>

                <div className="col-10 col-md-6 mx-auto">
                    <div className="img-row">
                        <GalleryImg src={yingxin202010v1} text="线上迎新 2020-10"/>
                    </div>
                    <div className="img-row">
                        <GalleryImg src={yingxin2019} text="迎新会 2019-10"/>
                    </div>
                    <div className="img-row">
                        <GalleryImg src={yingxin202010v2} text="线上迎新 2020-10"/>
                    </div>
                </div>
            </div>
        </div>
    );
}