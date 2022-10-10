import React from "react"
import EducationTimelineItem from "./EducationTimelineItem"
import EducationTimelineHeader from "./EducationTimelineHeader"
import Resume from "../../resume.json"

function EducationTimeline() {
    return(
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
            </header>
            <div className="education-timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>
            {
                Resume.education.map((item) => {
                    return new Date(item.startDate).getFullYear()
                })
                .map((year, i) => {
                    let content = []
                    content.push(
                        <EducationTimelineHeader key={i} year={year}/>
                      );
                    content.push(
                        Resume.education
                        .filter(education => new Date(education.startDate).getFullYear() === year)
                        .map((item, j) => {
                            return (
                                <EducationTimelineItem
                                        key = {j}
                                        startDate = {new Date(item.startDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        endDate = {item.endDate === "" ? "Present" : new Date(item.endDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        institution = {item.institution}
                                        area = {item.area}
                                        image =  {item.image}                                                      
                                        studyType = {item.studyType}
                                        courses = {item.courses}
                                    />
                            );
                        }));
                    return content
                })
            }
        </div>
    )
}

export default EducationTimeline
