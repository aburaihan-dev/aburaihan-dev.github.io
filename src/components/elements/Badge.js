import React from "react";

function Badge({ faIcon, text }) {
  const isImage = faIcon.includes("images");
  
  const icon = isImage ? (
    <img height="16" width="16" src={faIcon} alt={text} />
  ) : (
    <i className={`fas fa-1x ${faIcon}`}></i>
  );

  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{text}</span>
        <span className="tag is-success">{icon}</span>
      </div>
    </div>
  );
}

export default Badge;
