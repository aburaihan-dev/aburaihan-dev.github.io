import React from "react";

function CredlyBadge(props) {
  let imgSrc =
    "images/certs/"+ props.imageName;
  let imgLink = props.profile;
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <figure class="image is-128x128">
          <img  src={imgSrc} alt={props.badgeName} height={props.height} title={props.name} />
        </figure>
      </a>
    </figure>
  );
}

export default CredlyBadge;
