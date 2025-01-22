import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
      <p>
          Built at <i className="fas fa-rocket"></i> by{" "}
          <a href="https://github.com/aburaihan-dev" className="has-text-white">
            <strong>Md. Abu Raihan Srabon</strong>
          </a>
        </p>
        <p>
          Theme <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
