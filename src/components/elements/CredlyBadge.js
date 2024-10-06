import React from "react";

const CredlyBadge = ({ width, height, imageId, imageName, badgeId, badgeName }) => {
  const imgSrc = `https://images.credly.com/size/${width}x${height}/images/${imageId}/${imageName}`;
  const imgLink = `https://www.credly.com/badges/${badgeId}/public_url`;
  
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <figure className="image is-128x128">
          <img src={imgSrc} alt={badgeName} />
        </figure>
      </a>
    </figure>
  );
};

export default CredlyBadge;
