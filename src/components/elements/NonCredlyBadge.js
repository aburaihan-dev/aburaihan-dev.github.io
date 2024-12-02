import React from "react";

const NonCredlyBadge = ({ imageName, profile, badgeName, height, name, badgeExpiry }) => {
  const formatDate = (dateString) => {
    if (!dateString || isNaN(new Date(dateString).getTime())) {
      return "∞";
    }
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  return (
    <figure className="is-inline-block image">
      <a href={profile} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', display: 'block' }}>
        <figure className="image is-128x128">
          <img
            src={`images/certs/${imageName}`}
            alt={badgeName}
            height={height}
            title={name}
          />
        </figure>
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          {formatDate(badgeExpiry[0]) + " - " + formatDate(badgeExpiry[1])}
        </div>
      </a>
    </figure>
  );
};

export default NonCredlyBadge;
