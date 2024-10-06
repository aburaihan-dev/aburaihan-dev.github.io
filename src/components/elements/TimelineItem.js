import React from "react";

const TimelineItem = ({ date, endDate, company, position, summary, highlights }) => {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{`${date} - ${endDate}`}</p>
        <h1 className="title is-4">{company}</h1>
        <h3 className="title is-6">{position}</h3>
        <p style={{ maxWidth: "25em" }}>{summary}</p>
        {highlights.length > 0 && (
          <div className="content">
            <ul style={{ maxWidth: '40em', textAlign: 'initial' }}>
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
