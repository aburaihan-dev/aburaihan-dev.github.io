import React from "react"
import EducationTimelineItem from "./EducationTimelineItem"
import EducationTimelineHeader from "./EducationTimelineHeader"
import Resume from "../../resume.json"

function EducationTimeline() {
    const currentYear = new Date().getFullYear()

    // Helper function to format date
    const formatDate = (date) => date ? new Date(date).toLocaleString('en-UK', {month:'long', year: 'numeric'}) : "Present"

    // Group education items by year
    const educationByYear = Resume.education.reduce((acc, item) => {
        const year = new Date(item.startDate).getFullYear()
        if (!acc[year]) acc[year] = []
        acc[year].push(item)
        return acc
    }, {})

    return (
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">{currentYear}</span>
            </header>
            <div className="education-timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>
            {Object.entries(educationByYear).sort(([a], [b]) => b - a).map(([year, items]) => (
                <React.Fragment key={year}>
                    <EducationTimelineHeader year={year} />
                    {items.map((item, index) => (
                        <EducationTimelineItem
                            key={index}
                            startDate={formatDate(item.startDate)}
                            endDate={formatDate(item.endDate)}
                            institution={item.institution}
                            area={item.area}
                            image={item.image}
                            studyType={item.studyType}
                            courses={item.courses}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default EducationTimeline
