import React from "react";

export default function Heading(props) {
    return (
        <div className="intro-container">
            <div className="heading">
                {props.text}
            </div>
            <div className="heading-line"></div>
            <div className="intro">
                <p>
                    UTADA(University of Toronto Application Development Association)是加拿大多伦多大学学生创办的华人CS兴趣社团。<br></br>
                    我们目前拥有约160名社团成员，一直致力于通过CS技术和社团旗下微信公众号UT助手为多大学生提供服务。<br></br>
                    社团活动包含Workshop、Tutorial、Techtalk等。<br></br>
                    其中TECH部门涵盖了IOS, Android, Web三大方向,让每一个对CS特定方向有热忱的小伙伴都能获得进步并找到自己的归属。<br></br>
                </p>
            </div>
        </div>
    );
}