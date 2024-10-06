import React from "react";

function Article({ url, title, image, extract }) {
  return (
    <article className="card article">
      <header className="card-header">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="card-header-title">{title}</h2>
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-header-icon"
          aria-label="Dev Community"
        >
          <span className="icon">
            <i className="fab fa-2x fa-dev" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      {image && (
        <div className="card-image">
          <img width="1000" height="420" src={image} alt="" />
        </div>
      )}
      <div className="card-content">
        <h1 className="heading">DEV.TO</h1>
        <p>{extract}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read the full article
        </a>
      </div>
    </article>
  );
}

export default Article;
