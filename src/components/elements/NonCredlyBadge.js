import React from "react";

function CredlyBadge(props) {
  let imgSrc =
    "images/certs/"+ props.imageName;
  let imgLink = props.profile;
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={props.badgeName} height={props.height} />
      </a>
    </figure>
  );
}

export default CredlyBadge;
