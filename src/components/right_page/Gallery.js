import React from "react";

import deptEvent from "../../assets/img/dept_event.png";
import deptMkt from "../../assets/img/dept_mkt.png";
import deptPr from "../../assets/img/dept_pr.png";
import deptTech from "../../assets/img/dept_tech.png";

//padding and width for image should be adjusted when replacing image source
export default function Gallery(props){
    return(
        <div className="gallery-container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-us">
                        <h1 style={{"font-size": "3.5rem"}}>我們</h1>
                    </div>
                    <div className="text-line-middle"></div>
                    <img src={deptMkt} alt="Failed to load" style={{"width": "75%", "float": "right"}}/>
                    <img src={deptTech} alt="Failed to load" style={{"width": "80%", "float": "right"}}/>
                    <div>
                        <img src={deptMkt} alt="Failed to load" style={{"width": "60%", "vertical-align": "top"}}/> 
                        <img src={deptPr} alt="Failed to load" style={{"width": "40%", "padding-left": "8px"}}/> 
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <img src={deptTech} alt="Failed to load" style={{"width": "100%"}}/>
                    <img src={deptEvent} alt="Failed to load" style={{"width": "50%", "padding-right": "4px"}}/>
                    <img src={deptEvent} alt="Failed to load" style={{"width": "50%", "padding-left": "4px"}}/>
                    <img src={deptTech} alt="Failed to load" style={{"width": "100%"}}/>
                    <img src={deptTech} alt="Failed to load" style={{"width": "100%"}}/>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <img src={deptMkt} alt="Failed to load" style={{"width": "100%"}}/>
                    <img src={deptPr} alt="Failed to load" style={{"width": "33%", "padding-right": "2px"}}/>
                    <img src={deptPr} alt="Failed to load" style={{"width": "33%", "padding-left": "2px", "padding-right": "2px"}}/>
                    <img src={deptPr} alt="Failed to load" style={{"width": "33%", "padding-left": "2px"}}/>
                    <div>
                        <h1 style={{"font-size": "3.5rem", "padding-top": "10px"}}>是誰</h1>
                    </div>
                    <div className="text-line-left"></div>
                    <img src={deptEvent} alt="Failed to load" style={{"width": "40%", "padding-right": "8px"}}/>
                    <img src={deptMkt} alt="Failed to load" style={{"width": "60%", "vertical-align": "top"}}/>
                </div>
            </div>
        </div>
    );
}