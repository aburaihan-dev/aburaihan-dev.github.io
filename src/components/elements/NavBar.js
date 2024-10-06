import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { text: "About Me", href: "#aboutMe" },
    { text: "Skills", href: "#skills" },
    { text: "Certifications", href: "#certifications" },
    { text: "Experience", href: "#experience" },
    { text: "Education & Training", href: "#education" },
    { text: "Articles", href: "#articles" },
  ];

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item title is-unselectable my-name">
            {Resume.basics.name}
          </a>
          <span
            className="navbar-burger burger"
            onClick={handleMenuClick}
            aria-label="menu"
            aria-expanded={showMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu nav-menu ${showMenu ? "is-active" : ""}`}>
          <div className="navbar-end" onClick={handleMenuClick}>
            {menuItems.map((item) => (
              <MenuItem key={item.href} text={item.text} href={item.href} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
