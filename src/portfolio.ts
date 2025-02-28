/* Change this file to get your personal Portfolio */
// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import muzesLogo from "./assets/images/muzesLogo.svg";
import factsetLogo from "./assets/images/factset-logo.svg";
import reduxLogo from "./assets/images/redux-icon.svg";
import javascriptLogo from "./assets/images/javascriptLogo.svg";
import pythonLogo from "./assets/images/pythonLogo.svg";
import typescriptLogo from "./assets/images/typescriptLogo.svg";
import reactLogo from "./assets/images/react-js-icon.svg";
import sqlLogo from "./assets/images/sql-server-icon.svg";
import sassLogo from "./assets/images/sass-icon.svg";
import jestLogo from "./assets/images/jest-js-icon.svg";
import cyPressLogo from "./assets/images/cypress.svg";
import htmlLogo from "./assets/images/html-icon.svg";
import cssLogo from "./assets/images/css-icon.svg";
import firebaseLogo from "./assets/images/google-firebase-icon.svg";
import azureLogo from "./assets/images/azure-icon.svg";
import awsLogo from "./assets/images/aws-icon.svg";
import fastAPILogo from "./assets/images/fastapi.svg";
// import pixlLogo from './assets/images/pixl_logo.svg'
import wiproLogo from "./assets/images/Wipro_Primary_Logo_Color_RGB.svg";
import fccLogo from "./assets/images/fcc_primary_large.svg";
import spotAwardLogo from "./assets/images/factset-spot-award.png";
import oxfordLogo from "./assets/images/oxford_summer_courses_logo.jpeg";

import azureFundamentalsLogo from "./assets/images/azure_fundamentals.png";
import iiitLogo from "./assets/images/iiit-new.png";
import nodeLogo from "./assets/images/node.svg";
import repoLogo from "./assets/images/repo.svg";
import repoFork from "./assets/images/repoFork.svg";
import repoStar from "./assets/images/repoStar.svg";
import splashAnimation from "./assets/lottie/splashAnimation.json";
import natterLogo from "./assets/images/natter.svg";

// Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 100 // Set animation duration as per your animation
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sravanth",
  title: "Hi there, I'm Sravanth",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Full Stack Web Applications with React / NodeJs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UE01eW_2aUJ_GqO1l4RRxztgVFF1he5u/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/sravanth-space",
  linkedin: "https://www.linkedin.com/in/sravanth-baratam/",
  gmail: "sravanthbaratam@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://sravanth-space.medium.com/",
  stackoverflow: "",
  instagram: "https://www.instagram.com/sravanth.space/",
  twitter: "https://twitter.com/sravanth-space",
  phone: "+44 7767990143",
  skype: "https://join.skype.com/invite/NJjGL1IcwhhP",
  upwork: "https://www.upwork.com/freelancers/sravanth",
  cal: "https://cal.com/sravanth/meet"
};

// Your Skills Section

const skillsSection = {
  display: true,
  title: "What i do",
  subTitle: "FULL STACK WEB DEVELOPMENT",
  skills: [
    //   emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    //   emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    //   emoji("⚡ Integration of third party services such as Azure SQL/etc")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      logo: htmlLogo
    },
    {
      skillName: "css3",
      logo: cssLogo
    },
    {
      skillName: "sass",
      logo: sassLogo
    },
    {
      skillName: "JavaScript",
      logo: javascriptLogo
    },
    {
      skillName: "Typescript",
      logo: typescriptLogo
    },
    {
      skillName: "reactjs",
      logo: reactLogo
    },
    {
      skillName: "Redux[Toolkit]",
      logo: reduxLogo
    },

    {
      skillName: "Jest",
      logo: jestLogo
    },
    {
      skillName: "CyPress",
      logo: cyPressLogo
    },
    {
      skillName: "python",
      logo: pythonLogo
    },
    {
      skillName: "fastAPI",
      logo: fastAPILogo
    },
    {
      skillName: "NodeJs",
      logo: nodeLogo
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },

    {
      skillName: "sql-database",
      logo: sqlLogo
    },
    {
      skillName: "azure",
      logo: azureLogo
    },
    {
      skillName: "aws",
      logo: awsLogo
    },
    // {
    //   skillName: "firebase",
    //   logo: firebaseLogo
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "kubernetes",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    {
      skillName: "Csharp",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: ".Net Web API",
      fontAwesomeClassname: "fab fa-windows"
    }
  ]
};

// Your education background

const educationInfo = {
  display: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Hertfordshire",
      logo: require("./assets/images/uh.jpg"),
      subHeader: "MSc in Data Science"
      // duration: "Jan 2024 - May 2025",
      // desc: "",
    },

    {
      schoolName: "National Institute of Technology Agartala",
      logo: require("./assets/images/download.jfif"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      // duration: "July 2015 - May 2019",
      desc: "Ranked top 5% in the program with CGPA: 8.1. Took courses about Software Engineering, Design and Analysis of algorithms, Operating Systems, ..."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Sasi Junior College",
    //   logo: require("./assets/images/download1.jfif"),
    //   subHeader: "Mathematics Physics and chemistry",
    //   duration: "June 2013 - May 2015",
    //   desc: "Ranked top 5% in the program with 97.5%.",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   // ]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};

// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Muzes AI",
      companylogo: muzesLogo,
      date: "",
      desc: "",
      descBullets: []
    },
    {
      role: "Full Stack Developer",
      company: "FactSet LTD",
      companylogo: factsetLogo,
      date: "",
      desc: "",
      descBullets: []
      // date: "March 2022 – May 2023",
      // desc: "As a Full-stack developer, I design, create, test, and deploy effective solutions.",
      // descBullets: [
      //   "Developed various SPA’s for Research and Advisory SBU in private markets space using React, FastAPI, and Azure.",
      //   "Followed coding standards(PEP8, etc). Done Code Reviews. Maintained >90% unit test coverage, <1% code duplication, and 0% code smells in SonarQube scans.",
      //   "Used Redis for distributed cache to improve the performance of the APIs. Used handlebars template engine to enable pdf/excel download of individual/global download of the report which contains tabular and chart data.",
      //   "Participated in the internal company-wide hackathon. Created a web app as a flexible way to categorize companies leveraging tags extracted from selected company webpages by using NLP.",
      //   "Used different logging tools lightstep, sentry, and pendo to effectively log the performance and errors.",
      //   "Participated in on-call shifts and helped clients to resolve their issues by debugging using the logging tools.",
      //   "Always maintained the performance and rarely had an SLT breach which will be due to the infra outage rather than the performance of the app."
      // ]
    },
    {
      role: "Senior Software Engineer",
      company: "Wipro Limited",
      companylogo: wiproLogo,
      date: "",
      desc: "",
      descBullets: []
      // date: "July 2018 – Feb 2022",
      // desc: "As a Full-stack [Automation] developer, I design, create, test, and deploy effective test automation solutions. My primary focus is to build cloud-based automation solutions.",
      // descBullets: [
      //   "My primary focus is designing, creating, testing, and deploying effective cloud-based automation solutions. Coordinate with management and support teams to deliver stable enterprise software products.",
      //   "Developed various automation tools(Full stack Web Apps) for Microsoft’s OS Compatability team to ease the manual and automated compatibility testing.",
      //   "Designed and developed a SPA to manage the automation like assigning tasks, triggering the setup of VM(virtual machine), and saving hours of manual effort daily by the tester to just set up the VM based on his task of the day.",
      //   "Created services to get the sprint-wise stats of the automation runs and suggestions based on the telemetry data. Consuming these services to populate the data in the UI provided various options to sort, filter, and see the graphs based on the selection eases the analysts to analyze the scope of improvement and give suggestions to the QA team.",
      //   "Used msal.js to authenticate and authorize the users based on their role (User/Contributor) to various app features/pages.",
      //   "Created automation tools for Microsoft's Agreement Center to simplify the validation of agreements based on location or region, language, or clauses. The tools automated manual processes such as generating validation reports by analyzing specific sections of the relevant documents.",
      //   "Created a SPA from scratch using ReactJs, and FluentUI to trigger the automation, view results, and compare with previous results with complex UI components like expandable tables, sorting, pagination, modal, etc…"
      // ]
    },
    {
      role: "Research Intern",
      company: "IIIT Hyderabad",
      companylogo: iiitLogo,
      date: "",
      desc: "",
      descBullets: []
      // date: "May 2018 – June 2018",
    }
    // {
    //   role: "Subject Tutor",
    //   company: "Oxford Summer Courses",
    //   companylogo: oxfordLogo,
    //   date: "",
    //   desc: "",
    //   descBullets: []
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUserName: "sravanth-space", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false,
  display: false,
  repoLogo: repoLogo,
  repoStar: repoStar,
  repoFork: repoFork
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: natterLogo,
      projectName: "Natter",
      projectDesc:
        "Natter is a social media platform dedicated to men’s mental health 🌍 We enable men to express their emotions to a community of like minded men 🗣️.     Natter, because you Matter",
      footerLink: [{url: "https://www.natter.org.uk/", name: "Visit Website"}]
    },

  ],
  display: false
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  display: true,
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Spot Award",
      subtitle:
        "I received a spot award for my outstanding performance at FactSet Research Systems.",
      image: spotAwardLogo,
      footerLink: [
        {
          name: "Award",
          url: "https://drive.google.com/file/d/1NLKNgkP1Ys4-MsFprobYuADgOKTTL4vu/view?usp=sharing"
        }
      ]
    },
    {
      title: "High Learning Agility Award",
      subtitle:
        "I was awarded a high learning agility ward for my rapid learning and implementation at Wipro Technologies.",
      image: wiproLogo,
      footerLink: []
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      image: azureFundamentalsLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/201c03e2-6c34-4a81-ad92-2fb47a56d24d/public_url"
        }
      ]
    },
    {
      title: "Front End Development Libraries",
      image: fccLogo,
      image_dark: factsetLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/sravanthbaratam/front-end-development-libraries"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      image: fccLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/sravanthbaratam/javascript-algorithms-and-data-structures"
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  display: true,
  displayMediumHashnodeBlogs: true,
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "",
      description: "",
      image: ""
    }
  ]
};

// Talks Sections

const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: ""
    }
  ]
};

// Podcast Section

const podcastSection = {
  display: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "sravanthbaratam@gmail.com"
};

//Twitter Section

const twitterDetails = {
  display: false,
  userName: "sravanth_space"
};
export {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
