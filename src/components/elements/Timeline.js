import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

function Timeline() {
  const currentYear = new Date().getFullYear();
  
  const workExperience = React.useMemo(() => {
    const years = [...new Set(Resume.work.map(item => new Date(item.startDate).getFullYear()))];
    
    return years.map(year => ({
      year,
      items: Resume.work.filter(work => new Date(work.startDate).getFullYear() === year)
    }));
  }, []);

  return (
    <div className="timeline is-centered">
      <TimelineHeader year={currentYear} isPresent />
      {workExperience.map(({ year, items }) => (
        <React.Fragment key={year}>
          <TimelineHeader year={year} />
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              date={formatDate(item.startDate)}
              endDate={item.endDate ? formatDate(item.endDate) : "Present"}
              position={item.position}
              company={item.company}
              logo={item.logo}
              summary={item.summary}
              highlights={item.highlights}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
}

export default Timeline;
