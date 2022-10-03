import React from "react";

function EducationTimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.startDate} - {props.endDate}</p>
        <h1 className="title is-4">{props.institution}</h1>
        <h3 className="title is-5">{props.studyType} in {props.area}</h3>
        <ul style={{maxWidth: '25em'}}>{props.courses.map(course => <li>{course}</li>)}</ul>
      </div>
    </div>
  );
}

export default EducationTimelineItem
