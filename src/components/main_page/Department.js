import React from "react";
import DeptTech from "./Departments/DeptTech";
import DeptEvent from "./Departments/DeptEvent";
import DeptMkt from "./Departments/DeptMkt";
import DeptPr from "./Departments/DeptPr";

import Heading from "./Heading";

import techImg from "../../assets/img/depts/TECH.png";
import prImg from "../../assets/img/depts/PR.png";
import mktImg from "../../assets/img/depts/MKT.png";
import eventImg from "../../assets/img/depts/EVENT.png";

export default function Department(props) {
    return (
        <div className="departments-section container">
            <Heading text="部门介绍" />
            <div className="row">
                <div className="col-10 col-md-5 my-1 mx-auto mr-md-1">
                    <DeptTech img={techImg} />
                </div>
                <div className="col-10 col-md-5 my-1 mx-auto ml-md-1">
                    <DeptEvent img={eventImg} />
                </div>
                <div className="col-10 col-md-5 my-1 mx-auto mr-md-1">
                    <DeptPr img={prImg} />
                </div>
                <div className="col-10 col-md-5 my-1 mx-auto ml-md-1">
                    <DeptMkt img={mktImg} />
                </div>

                {/* <div className="row">
                    <div className="col-sm">
                        <img src={ tech } className="department-image" alt=""></img>
                        <div className="department-overlay">
                            <div className="department-title"> Tech Department </div>
                            <div className="department-description">This is a description of tech department.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img src={ pr } className="department-image" alt=""></img>
                        <div className="department-overlay">
                            <div className="department-title"> Tech Department </div>
                            <div className="department-description">This is a description of pr department.</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={ mkt } className="department-image" alt=""></img>
                        <div className="department-overlay">
                            <div className="department-title"> Tech Department </div>
                            <div className="department-description">This is a description of mkt department.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img src={ event } className="department-image" alt=""></img>
                        <div className="department-overlay">
                            <div className="department-title"> Event Department </div>
                            <div className="department-description">This is a description of event department.</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}