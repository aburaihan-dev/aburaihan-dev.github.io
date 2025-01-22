import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

const Hero = () => {
  const { basics } = Resume;
  const { label, location, profiles } = basics;
  const [backgroundImage, setBackgroundImage] = useState('/images/image-2.webp');

  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        '/images/image-2.webp',
        '/images/image-1.webp'
      ];
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (url === '/images/image-2.webp') {
            setBackgroundImage(url);
          }
        };
      });
    };
    preloadImages();
  }, []);

  return (
    <section 
      className="hero is-dark is-fullheight"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">I'm a</p>
          <h1 className="title">{label}</h1>
          <h2 className="subtitle">
            {location.region}, {location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {profiles.map(({ url, network, x_icon }, index) => (
            <div key={index} className="column has-text-centered">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="is-hovered"
                title={network}
              >
                <span className="icon is-medium">
                  <i className={x_icon}></i>
                </span>
              </a>
            </div>
          ))}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
