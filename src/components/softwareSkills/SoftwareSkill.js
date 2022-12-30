import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            if (skills.fontAwesomeClassname)
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            else
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <img src={skills.logo} alt={skills.skillName}/>
                  <p>{skills.skillName}</p>
                </li>
              )
          })}
        </ul>
      </div>
    </div>
  );
}
