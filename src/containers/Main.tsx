import React from "react";
import "../styles.css";
import {useTheme} from "../hooks/useTheme";
import {useReveal} from "../hooks/useReveal";
import {
  Sun,
  Moon,
  Arrow,
  Mail,
  Github,
  Linkedin,
  Medium,
  Twitter,
  Instagram
} from "../components/Icons";
import {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  achievementSection,
  contactInfo
} from "../portfolio";

/* Nicer display labels for a few slug-style skill names */
const skillLabels: Record<string, string> = {
  "html-5": "HTML5",
  css3: "CSS3",
  sass: "Sass",
  reactjs: "React",
  "sql-database": "SQL",
  aws: "AWS",
  azure: "Azure",
  angular: "Angular",
  docker: "Docker",
  Csharp: "C#"
};

const skills = skillsSection.softwareSkills.map(
  s => skillLabels[s.skillName] ?? s.skillName
);

const socials = [
  {href: socialMediaLinks.github, label: "GitHub", Icon: Github},
  {href: socialMediaLinks.linkedin, label: "LinkedIn", Icon: Linkedin},
  {href: socialMediaLinks.medium, label: "Medium", Icon: Medium},
  {href: socialMediaLinks.twitter, label: "Twitter", Icon: Twitter},
  {href: socialMediaLinks.instagram, label: "Instagram", Icon: Instagram}
].filter(s => s.href);

const email = contactInfo.email_address || socialMediaLinks.gmail;

const Main = () => {
  const {theme, toggle} = useTheme();
  useReveal();

  return (
    <>
      {/* ---- nav ---- */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            {greeting.username}
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#awards">Awards</a>
            <a href="#contact">Contact</a>
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>

      <main className="wrap" id="top">
        {/* ---- hero ---- */}
        <header className="hero">
          <div className="eyebrow">Hi, I'm {greeting.username} 👋</div>
          <h1>Software Engineer building thoughtful full-stack products.</h1>
          <p>
            I design and ship full-stack web applications with React, TypeScript
            and Python — currently engineering at Quaisr, with an MSc in Data
            Science. I care about clean interfaces and details that hold up.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              Get in touch <Arrow width={16} height={16} />
            </a>
            {greeting.resumeLink && (
              <a
                className="btn btn-ghost"
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            )}
          </div>
          <div className="socials">
            {socials.map(({href, label, Icon}) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </header>

        {/* ---- experience ---- */}
        {workExperiences.display && (
          <section id="work" className="reveal">
            <div className="section-label">Experience</div>
            {workExperiences.experience.map((exp: any, i: number) => (
              <div className="exp-item" key={i}>
                {exp.companylogo ? (
                  <span className="exp-logo">
                    <img src={exp.companylogo} alt={exp.company} loading="lazy" />
                  </span>
                ) : (
                  <span className="exp-dot" />
                )}
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  {exp.desc && <div className="exp-desc">{exp.desc}</div>}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ---- skills ---- */}
        <section id="skills" className="reveal">
          <div className="section-label">Skills &amp; Tools</div>
          <div className="tags">
            {skills.map(s => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ---- education ---- */}
        {educationInfo.display && (
          <section id="education" className="reveal">
            <div className="section-label">Education</div>
            {educationInfo.schools.map((s: any, i: number) => (
              <div className="edu-item" key={i}>
                <div className="edu-school">{s.schoolName}</div>
                {s.subHeader && <div className="edu-sub">{s.subHeader}</div>}
                {s.desc && <div className="edu-desc">{s.desc}</div>}
              </div>
            ))}
          </section>
        )}

        {/* ---- achievements ---- */}
        {achievementSection.display && (
          <section id="awards" className="reveal">
            <div className="section-label">Achievements &amp; Certifications</div>
            <div className="cards">
              {achievementSection.achievementsCards.map((card: any, i: number) => {
                const link = card.footerLink && card.footerLink[0];
                return (
                  <div className="card" key={i}>
                    <h3>{card.title}</h3>
                    {card.subtitle && <p>{card.subtitle}</p>}
                    {link && link.url && (
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.name} →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ---- contact ---- */}
        <section id="contact" className="contact reveal">
          <h2>Let's build something.</h2>
          <p>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <div className="cta-row" style={{justifyContent: "center"}}>
            <a className="btn btn-primary" href={`mailto:${email}`}>
              <Mail width={16} height={16} /> {email}
            </a>
            {socialMediaLinks.cal && (
              <a
                className="btn btn-ghost"
                href={socialMediaLinks.cal}
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </a>
            )}
          </div>
          <div className="socials" style={{justifyContent: "center"}}>
            {socials.map(({href, label, Icon}) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {greeting.username} Baratam · Built with
        React
      </footer>
    </>
  );
};

export default Main;
