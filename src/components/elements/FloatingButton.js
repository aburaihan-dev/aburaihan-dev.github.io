import React from 'react';
import './FloatingButton.css'; // Create a CSS file for styling the button

const FloatingButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <div className="floating-button" onClick={handleScrollToTop}>
      {/* You can customize the button icon or text here */}
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default FloatingButton;
