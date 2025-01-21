import React, { useState, useEffect } from "react";
import Article from "../elements/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const devTo = "https://dev.to/api/articles?username=msrabon&page=1&per_page=5";
      
      try {
        const response = await fetch(devTo);
        const data = await response.json();
        const slicedData = data.slice(0, 4);
        
        const articleElements = slicedData.map((element, index) => (
          <div className="column" key={element.id || index}>
            <Article
              title={element.title}
              url={element.url}
              image={element.cover_image}
              extract={element.description}
            />
          </div>
        ));

        // Fill remaining columns if less than 4 articles
        const remainingColumns = Array(4 - slicedData.length).fill().map((_, index) => (
          <div className="column" key={`empty-${index}`}></div>
        ));

        setArticles([...articleElements, ...remainingColumns]);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="section" id="articles">
      <div className="container">
        <h1 className="title">Articles</h1>
        <h2 className="subtitle is-4">My latest articles</h2>
        <div className="columns">{articles}</div>
      </div>
    </section>
  );
};

export default Articles;
