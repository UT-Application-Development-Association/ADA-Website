import React from "react";

export default function DeptTech(props) {
    return (
        <div className="dept dept-pr">
            <div className="dept-name">
                公关部
            </div>
            <div className="dept-content content-row mx-auto">
                <div className="dept-description">
                    公关部手中掌握着UTADA全部的人脉为社团提供着与其他社团乃至国际大企的联络和合作。部门的主要工作是为社团和社团举办的各项活动寻找合作伙伴与赞助商。同时长期与多大其他社团保持交流。
                </div>
                <div className="dept-img-container">
                    <img src={props.img} alt=""  className="dept-img" />
                </div>
            </div>
        </div>
    );
}