import React from "react";

const NonCredlyBadge = ({ imageName, profile, badgeName, height, name }) => (
  <figure className="is-inline-block image">
    <a href={profile} target="_blank" rel="noopener noreferrer">
      <figure className="image is-128x128">
        <img
          src={`images/certs/${imageName}`}
          alt={badgeName}
          height={height}
          title={name}
        />
      </figure>
    </a>
  </figure>
);

export default NonCredlyBadge;
