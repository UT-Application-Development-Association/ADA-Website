import React from "react";
import tech from "../../assets/img/TECH.png";
import pr from "../../assets/img/PR.png";
import mkt from "../../assets/img/MKT.png";
import event from "../../assets/img/EVENT.png";

export default function Department(props) {
    return (
        <div className="departments-section">
            <div className="departments-title">
                <h1>Departments</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={ tech } class="department-image" alt=""></img>
                        <div class="department-overlay">
                            <div class="department-title"> Tech Department </div>
                            <div class="department-description">This is a description of tech department.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img src={ pr } class="department-image" alt=""></img>
                        <div class="department-overlay">
                            <div class="department-title"> Tech Department </div>
                            <div class="department-description">This is a description of pr department.</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={ mkt } class="department-image" alt=""></img>
                        <div class="department-overlay">
                            <div class="department-title"> Tech Department </div>
                            <div class="department-description">This is a description of mkt department.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img src={ event } class="department-image" alt=""></img>
                        <div class="department-overlay">
                            <div class="department-title"> Event Department </div>
                            <div class="department-description">This is a description of event department.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}