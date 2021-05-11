import React from "react";

export default function DeptTech(props) {
    return (
        <div className="dept dept-event">
            <div className="dept-name">
                活动部
            </div>
            <div className="dept-content content-row mx-auto">
                <div className="dept-description">
                    活动部是UTADA中最年轻的部门，作为全部活动的策划，活动部中聚集了许多对生活充满热情的同学，同时建立时间较短使得该部门仍具有较大的弹性来包含所有部员充满创意的想法。部门的主要工作为策划和举办对内及对外的学术或娱乐活动。
                </div>
                <div className="dept-img-container">
                    <img src={props.img} alt=""  className="dept-img" />
                </div>
            </div>
        </div>
    );
}