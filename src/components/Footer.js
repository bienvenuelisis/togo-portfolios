import React from "react";
import "./../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p> &copy; 2023 - Togo Portfolios. All rights reserved.</p>
        <a href="https://github.com/bienvenuelisis/togo-portfolios" target="_blank">
          <img src="assets/images/github-fill.svg" alt="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
