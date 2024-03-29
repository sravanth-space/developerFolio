import React, {useContext} from "react";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext<any>(StyleContext);
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  return (
    <Fade duration={1000}>
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map(card => {
              return (
                <AchievementCard
                  key={card.title}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
