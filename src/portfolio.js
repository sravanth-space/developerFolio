
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import factsetLogo from './assets/images/factset-logo.svg'
import reduxLogo from './assets/images/redux-icon.svg'
import javascriptLogo from './assets/images/javascriptLogo.svg'
import pythonLogo from './assets/images/pythonLogo.svg'
import typescriptLogo from './assets/images/typescriptLogo.svg'
import reactLogo from './assets/images/react-js-icon.svg'
import sqlLogo from './assets/images/sql-server-icon.svg'
import sassLogo from './assets/images/sass-icon.svg'
import jestLogo from './assets/images/jest-js-icon.svg'
import cyPressLogo from './assets/images/cypress.svg'
import htmlLogo from './assets/images/html-icon.svg'
import cssLogo from './assets/images/css-icon.svg'
import firebaseLogo from './assets/images/google-firebase-icon.svg'
import azureLogo from './assets/images/azure-icon.svg'
// import awsLogo from './assets/images/aws-icon.svg'
import fastAPILogo from './assets/images/fastapi.svg'
import pixlLogo from './assets/images/pixl_logo.svg'
const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sravanth Baratam",
  title: "Hi there, I'm Sravanth",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Full Stack Web Applications with React / FastAPI and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ivXNWjz9lZiEBKmarZL67wkmSJt5wwKy/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sravanthbaratam",
  linkedin: "https://www.linkedin.com/in/sravanth-baratam-49ab3aba/",
  gmail: "sravanthbaratam@gmail.com",
  // gitlab: "",
  facebook: "https://www.facebook.com/sravanthbaratam/",
  medium: "https://sravanthbaratam.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/12789289/sravanth-baratam",
  instagram: "https://www.instagram.com/sravanth_baratam/",
  twitter: "https://twitter.com/sravanthbaratam"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK WEB DEVELOPMENT",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Azure SQL/etc")
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
    // {
    //   skillName: "Csharp",
    //   fontAwesomeClassname: "fab fa-windows"
    // },
    // {
    //   skillName: ".Net Web API",
    //   fontAwesomeClassname: "fab fa-windows"
    // },
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
    // {
    //   skillName: "angular",
    //   fontAwesomeClassname: "fab fa-angular"
    // },
    {
      skillName: "sql-database",
      logo: sqlLogo
    },
    {
      skillName: "azure",
      logo: azureLogo
    },
    // {
    //   skillName: "aws",
    //   logo: awsLogo
    // },
    {
      skillName: "firebase",
      logo: firebaseLogo
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "NIT Agartala",
      logo: require("./assets/images/download.jfif"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2015 - June 2019",
      desc: "Ranked top 10% in the program with CGPA: 8.1. Took courses about Software Engineering, Design and Analysis of algorithms, Operating Systems, ...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sasi Junior College",
      logo: require("./assets/images/download1.jfif"),
      subHeader: "Mathematics Physics and chemistry",
      duration: "June 2013 - May 2015",
      desc: "Ranked top 5% in the program with 97.5%.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
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
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [


    {
      role: "Front-End Developer",
      company: "PiXL Tech LTD",
      companylogo: pixlLogo,
      date: "March 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer II",
      company: "FactSet Research Systems Inc",
      companylogo: factsetLogo,
      date: "March 2022 – Jan 2023",
      desc: "As a Full-stack developer, I design, create, test, and deploy effective solutions.",
      descBullets: [
        "Used both SCRUM (Agile) for Project management",
        "Coordinate with management and support teams to deliver stable enterprise software products.",
        "Technology Stack:–  FrontEnd: Vue, BootStrap – BackEnd: Python, FAST API – Cloud: Heroku, AWS"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wipro.jfif"),
      date: "July 2019 – Feb 2022",
      desc: "As a Full-stack [Automation] developer, I design, create, test, and deploy effective test automation solutions. My primary focus is to build cloud-based automation solutions.",
      descBullets: [
        "Used both SCRUM (Agile) and Waterfall methodologies for Project management",
        "Coordinate with management and support teams to deliver stable enterprise software products.",
        "Currently, building a test automation solution for Microsoft.",
        "Technology Stack:–  FrontEnd: Angular, Material, and Nebular – BackEnd: .Net Web API – Database: SQL Server(on-prem), Azure SQL server"
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUserName: "sravanthbaratam", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false,
  display: true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ],
  display: true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
    //     { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
    //     { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "",
    //   title: "",
    //   description: ""
    // },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "",
    //   subtitle: "",
    //   slides_url: "",
    //   event_url: ""
    // }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // ""
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9010155001",
  email_address: "sravanthbaratam@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "sravanthbaratam"
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
