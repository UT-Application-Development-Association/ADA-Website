import React from "react";
import FullTimelineEvent from "./FullTimelineEvent.js";
import Heading from "../main_page/Heading.js";

import imgClubCarnival2019 from "../../assets/img/events/ClubCarnival2019.jpeg";
import imgWelcoming2019 from "../../assets/img/events/Welcoming2019.jpeg";
import imgInnovationFair2020 from "../../assets/img/events/InnovationFair2020.png";
import imgOnlineClubFair2020 from "../../assets/img/events/OnlineClubFair2020.jpeg";
import imgCourseWiki from "../../assets/img/events/CourseWiki.png";
import imgUTHack2021 from "../../assets/img/events/UTHack2021.png";

export default function FullTimeline(props) {
    return (
        <div className="full-timeline-container container">
            <Heading text="$ git log" white="true" />

            {/* Events should be in reverse order, i.e. the most recent event should be the first */}
            <div className="events-container">
                <FullTimelineEvent  
                    name="参与 UTHack 2021" 
                    img={imgUTHack2021}
                    url="https://www.facebook.com/UoftHacks/"
                    description="参与UTHack"
                    date="02/2021"
                />
                <FullTimelineEvent  
                    name="Course-wiki 上线" 
                    img={imgCourseWiki}
                    url="https://course-wiki.uoftada.com/"
                    description="欢迎大家贡献上课心得"
                    date="12/2020"
                />
                <FullTimelineEvent  
                    name="举办 Online Club Fair 2020" 
                    img={imgOnlineClubFair2020}
                    url="https://www.uoftclubfair.com/clubs/UTADA/"
                    description="合办线上Club Fair"
                    date="09/2020"
                />
                <FullTimelineEvent  
                    name="举办 Innovation Fair 2020" 
                    img={imgInnovationFair2020}
                    url="https://if2020.uoftada.com/"
                    description="第一届IF2020"
                    date="07/2020 ~ 08/2020"
                />
                <FullTimelineEvent  
                    name="新生见面会 2019" 
                    img={imgWelcoming2019}
                    url="#timeline"
                    description="开展新生见面会，一起游戏！"
                    date="10/2019"
                />
                <FullTimelineEvent  
                    name="参加 Club Carnival 2019" 
                    img={imgClubCarnival2019}
                    url="#timeline"
                    description="UTADA招新！"
                    date="09/2019"
                />
            </div>
        
        </div>
    );
}