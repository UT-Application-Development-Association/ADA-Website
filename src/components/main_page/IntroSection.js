import React from "react";
import Heading from "./Heading";

export default function IntroSection(props) {
    return (
        <div className="intro-container container">
            <Heading text="基本介绍"/>
            <div className="intro-text paragraph my-3 my-md-4">
                        我！们！是！University of Toronto Application Development Association（多伦多大学应用开发社），你也可以简称我们为UTADA。
                        <br/><br/>
                        UTADA成立于2014年秋天。在这七年里，我们一直致力于创造一个属于多伦多大学的开放性技术社区。无论是走在路边突然的灵光一闪，还是经过深思熟虑的创意，我们都会倾尽全力帮你实现。无论是你CS萌新，还是技术大佬，总能在ADA找到适合自己的开发项目，积累宝贵的应用开发经验。
                        <br/><br/>
                        除此之外，我们会定期举办干货Workshop，内容覆盖硬核编程技巧，课程选择，和职业发展。在往期活动中，我们邀请到了来自华为，IBM，安大略省政府，花旗银行，以及其他知名企业的嘉宾给社员们传授宝贵经验。
                        <br/><br/>
                        我们也同时运营着优质的微信平台“UT助手”和 LinkedIn 页面“University of Toronto Application Development
                        Association”，希望能陪伴你度过每寸大学时光。
            </div>
        </div>
    );
}