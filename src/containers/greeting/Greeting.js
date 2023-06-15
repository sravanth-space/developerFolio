import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
// import manOnTable from '../../assets/images/manOnTable.svg'
import Lottie from "react-lottie";
import helloAnimation from "../../assets/lottie/hello.json";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: helloAnimation
  };
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
              alt="sravanth sitting on table"
              src={manOnTable}
            ></img> */}
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
