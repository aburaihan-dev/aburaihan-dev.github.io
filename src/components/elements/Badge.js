import React from "react";

function Badge(props) {
  const faIcon = "fas fa-1x " + props.faIcon;

  let icon;
  if(props.faIcon.includes("images"))
    icon = <img height="16px" width="16px" src={props.faIcon} alt={props.text}/>
  else
    icon = <i className={faIcon}></i>

  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-success">
        {icon}
        </span>
      </div>
    </div>
  );
}

export default Badge;
