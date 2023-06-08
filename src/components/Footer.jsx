import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../Stylesheet/Footer.css";

function Footer() {
  return (
    <footer className="footer  col-sm-3 col-md-6 col-xl-12">
      <div className="footer__content">
        <p>&copy; 2023 Juan Carlos Campos Hernández</p>
        <div className="footer__social-icons">
          <a href="https://github.com/juank03" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/juan-campos-hernandez-b71608272/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/Juan03campos" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

