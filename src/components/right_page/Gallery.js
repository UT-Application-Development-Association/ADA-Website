import React from "react";
import Heading from "../../components/main_page/Heading";

import deptEvent from "../../assets/img/dept_event.png";
import deptMkt from "../../assets/img/dept_mkt.png";
import deptPr from "../../assets/img/dept_pr.png";
import deptTech from "../../assets/img/dept_tech.png";

//padding and width for image should be adjusted when replacing image source
export default function Gallery(props) {
    return (
        <div className="gallery-container container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6">
                    <Heading text="我们是谁" />
                    <div className="img-row">
                        <img src={deptMkt} alt="Failed to load" className="" />
                    </div>
                    <div className="img-row">
                        <img src={deptTech} alt="Failed to load"  className=""/>
                    </div>
                    <div className="img-row">
                        <img src={deptMkt} alt="Failed to load" style={{ "width": "60%"}} />
                        <img src={deptPr} alt="Failed to load" style={{ "width": "40%", "margin-left": "8px" }} />
                    </div>
                </div>

                <div className="col-12 col-md-8 col-lg-6">
                    <div className="img-row">
                        <img src={deptTech} alt="Failed to load" style={{ "width": "100%" }} />
                    </div>
                    <div className="img-row">
                        <img src={deptEvent} alt="Failed to load" style={{ "width": "50%", "margin-right": "4px" }} />
                        <img src={deptEvent} alt="Failed to load" style={{ "width": "50%", "margin-left": "4px" }} />
                    </div>
                    <div className="img-row">
                        <img src={deptTech} alt="Failed to load" style={{ "width": "100%" }} />
                    </div>
                    <div className="img-row">
                        <img src={deptTech} alt="Failed to load" style={{ "width": "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}