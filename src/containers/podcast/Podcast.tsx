import React, {useContext} from "react";
import "./Podcast.css";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext<any>(StyleContext);
  return (
    <Fade direction="up" duration={1000}>
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, idx) => {
            return (
              <div key={idx}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  title="podcast"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
