import React from "react";
import tech from "../../assets/img/dept_tech.png";
import pr from "../../assets/img/dept_pr.png";
import mkt from "../../assets/img/dept_mkt.png";
import event from "../../assets/img/dept_event.png";

export default function Department(props) {
    return (
        <div className="departments-section">
            <h1>This is Our Departments</h1>
            <div className="departments-title">
                <h1>Departments</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={ tech } alt=""></img>
                    </div>
                    <div className="col-sm">
                        <img src={ pr } alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={ mkt } alt=""></img>
                    </div>
                    <div className="col-sm">
                        <img src={ event } alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}