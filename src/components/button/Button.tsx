import React from "react";
import "./Button.css";

export default function Button({text, className = "", href, newTab = false}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab ? "_blank" : ""}>
        {text}
      </a>
    </div>
  );
}
