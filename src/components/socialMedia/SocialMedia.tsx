import React from "react";
import "./SocialMedia.css";
import {socialMediaLinks} from "../../portfolio";
import upwork from "../../assets/images/upwork.svg";
import "@calcom/embed-react";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.cal ? (
        <a
          href={socialMediaLinks.cal}
          className="icon-button cal"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-calendar-days" title="Cal.com"></i>
        </a>
      ) : null}
      {socialMediaLinks.phone ? (
        <a
          href={"tel:" + socialMediaLinks.phone}
          className="icon-button twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-phone"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-medium" title="Medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-stack-overflow" title="Stackoverflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.upwork ? (
        <a
          href={socialMediaLinks.upwork}
          className="icon-button upwork"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={upwork}
            alt="Upwork"
            className="card-image"
            style={{width: "20px"}}
          ></img>
        </a>
      ) : null}

      {socialMediaLinks.skype ? (
        <a
          href={socialMediaLinks.skype}
          className="icon-button skype"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-skype"
            style={{color: "#099ade"}}
            title="Skype"
          ></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
