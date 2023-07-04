import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext<any>(StyleContext);
  return (
    <Fade duration={1000}>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Sravanth")}
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/sravanth299/developerFolio">
            developerFolio
          </a>
        </p> */}
      </div>
    </Fade>
  );
}
