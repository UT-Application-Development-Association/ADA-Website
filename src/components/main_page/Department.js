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
            <div className="dept-row">
                <div className="my-auto ml-md-auto">
                    <DeptTech img={techImg} />
                </div>
                <div className="my-auto mr-md-auto">
                    <DeptEvent img={eventImg} />
                </div>
            </div>
            <div className="dept-row">
                <div className="my-auto ml-md-auto">
                    <DeptPr img={prImg} />
                </div>
                <div className="my-auto mr-md-auto">
                    <DeptMkt img={mktImg} />
                </div>
            </div>
        </div>
    );
}