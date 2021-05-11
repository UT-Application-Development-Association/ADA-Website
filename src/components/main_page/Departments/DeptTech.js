import React from "react";

export default function DeptTech(props) {
    return (
        <div className="dept dept-tech">
            <div className="dept-name">
                技术部
            </div>
            <div className="dept-content content-col mx-auto">
                <div className="dept-description">
                    作为UTADA人数最多的核心部门，技术部便是社团名字中Development的由来。部门主要工作只有一个，便是进行不同平台的软件或网页开发。在项目选择上，技术部开发的项目也分为社团相关的内容与由部员设计领导的项目小组。
                </div>
                <div className="dept-img-container">
                    <img src={props.img} alt="tech-dept"  className="dept-img" />
                </div>
            </div>
        </div>
    );
}