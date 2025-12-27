import React from "react";
import "./aboutus.scss";
import { aboutData } from "./aboutData";

const AboutUs: React.FC = () => {
  return (
    <section className="about" id="aboutus">
      <div className="container about-inner">
        {/* 1: Text → Image */}
        <div className="about-block">
          <div className="about-text">
            <h2>{aboutData.intro.title}</h2>
            <p>{aboutData.intro.description}</p>
          </div>
          <div className="about-image image-1" />
        </div>

        {/* 2: Image → Text */}
        <div className="about-block">
          <div className="about-image image-2" />
          <div className="about-text">
            <h2>{aboutData.mission.title}</h2>
            <p>{aboutData.mission.description}</p>
          </div>
        </div>

        {/* 3: Text → Image */}
        <div className="about-block">
          <div className="about-text">
            <h2>{aboutData.vision.title}</h2>
            <p>{aboutData.vision.description}</p>
          </div>
          <div className="about-image image-3" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
