import React from "react";

function CredlyBadge(props) {
  let imgSrc = "https://images.credly.com/size/" + props.width + "x" + props.height;
  imgSrc += "/images/" + props.imageId + "/" + props.imageName;
  
  let imgLink = "https://www.credly.com/badges/" + props.badgeId + "/public_url";
  
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <figure className="image is-128x128">
          <img src={imgSrc} alt={props.badgeName} />
        </figure>
      </a>
    </figure>
  );
}

export default CredlyBadge;
