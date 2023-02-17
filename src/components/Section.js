import React from "react";
import "./../styles/section.scss";

const Section = () => {
  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__text">
          <h1>Togo Portfolios</h1>
          <p>Open source collection of Togolese portfolios</p>
          <a href="https://github.com/bienvenuelisis/togo-porfolios">
            Contribute on github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
