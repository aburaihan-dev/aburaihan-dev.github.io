import React from "react";

function EducationTimelineItem({ startDate, endDate, institution, studyType, area, courses }) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{`${startDate} - ${endDate}`}</p>
        <h1 className="title is-4">{institution}</h1>
        <h3 className="title is-5">{`${studyType} in ${area}`}</h3>
        <ul style={{ maxWidth: '25em' }}>
          {courses.map((course) => <li key={course}>{course}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default EducationTimelineItem;
