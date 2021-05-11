import React from "react";

export default function DeptTech(props) {
    return (
        <div className="dept dept-mkt">
            <div className="dept-name">
                文宣部
            </div>
            <div className="dept-content content-col mx-auto">
                <div className="dept-description">
                文宣部作为UTADA的门面担当承担了社团对外宣传的职责。部门的主要工作内容集中于文案及设计，将社团内部信息及时有效的传达出去。其中文案可分为公众号：UT助手上面的文章撰写与辅助其他部门补充文案。另一方面设计则包含了海报设计和网页设计两部分。
                </div>
                <div className="dept-img-container">
                    <img src={props.img} alt=""  className="dept-img" />
                </div>
            </div>
        </div>
    );
}