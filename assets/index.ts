import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  web,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  expo,
  phaserPlanetSmall,
  phpIcon,
  wordpressIcon,
  frontendIcon,
  unilorin,
  waltersGarment,
  nodejs,
  git,
  figma
} from "../assets";
import TigerClaw from "../assets/TigerClaw.png";
import magazinecover from "../assets/Magazine Cover 2.jpg";
import Nightwave from "../assets/Nightwave space2.jpg";
import github from "../assets/github.png";
import isaacImg from "../assets/tech/isaac.jpg";
import webDeveloperImg from "../assets/Web Developer.png";
import  Codecademy  from "../assets/company/Codecademy.png";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: webDeveloperImg,
  },
  {
    title: "React Native Developer",
    icon: expo,
  },
  {
    title: "Frontend Developer",
    icon: frontendIcon,
  },
  {
    title: "Phaser.js Developer",
    icon: phaserPlanetSmall,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "WordPress",
    icon: wordpressIcon,
  },
  {
    name: "Tailwind CSS",
    icon: expo,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "php",
    icon: phpIcon,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "phaser.js",
    icon: phaserPlanetSmall,
  },
];

const experiences: TExperience[] = [
  {
    title: "Wordpress Developer",
    companyName: "Walters-garments",
    icon: waltersGarment,
    iconBg: "#383E56",
    date: "January 2024 - November 2024",
    points: [
      "I was posted to a Manufacturing company as a Youth Corper for a year. During my service year, I worked as a Web Designer (WordPress) and a Graphics designer, where I was actively in charge of restoring websites to proper manner, executing daily checks on plugins updates, redesigning new WordPress websites to meet company's aesthetic needs, configuration of company's business Email through the cPanel, and restoration of company's social media accounts.",
    ],
  },
  {
    title: "Educational Technologist",
    companyName: "University of Ilorin",
    icon: unilorin,
    iconBg: "#E6DEDD",
    date: "November 2018 - October 2023",
    points: [
      "during my time as a student in the university of ilorin, I worked with a broadcast radio mixer engineer, made a micro teaching YouTube video with my peers, made a design that was printed on the school's departmental billboard, used PowerPoint for both teaching and examination purposes and minored from mechanical engineering department and teamed up with my peers for a metallurgical engineering course.",
    ],
  },
  {
    title: "Frontend Engineer",
    companyName: "Codecademy",
    icon: Codecademy,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "with more than six months in training at Codecademy, i was able to gain new set of skills in the field Front-end Development.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Tig3rClaw",
    description:
      "Phaser.js game that allows users to play a 2D game where they can control a tiger and navigate through various levels, collecting items and avoiding obstacles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Phaser.js",
        color: "pink-text-gradient",
      },
    ],
    image: TigerClaw,
    sourceCodeLink: "https://tig3r187.github.io/ISAAC-23/",
  },
  {
    name: "Nightwave",
    description:
      "A captivating journey through the cosmos.",
    tags: [
      {
        name: "Graphics Design",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Coreldraw",
        color: "pink-text-gradient",
      },
    ],
    image: Nightwave,
    sourceCodeLink: "https://tig3r187.github.io/ISAAC-23/",
  },
  {
    name: "Magazine Cover",
    description:
      "A visually stunning magazine cover design.",
    tags: [
      {
        name: "Coreldraw",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: magazinecover,
    sourceCodeLink: "https://tig3r187.github.io/ISAAC-23/",
  },
];

export const footer = {
  icon: github,
  text: "Isaac Yakubu 2025 – All rights reserved.",
  email: "iamisaacyakubu@gmail.com"
};

export const aboutMe = {
  image: isaacImg,
  // You can add more dynamic fields here if needed
};

export { services, technologies, experiences, projects };
export { default as web } from "../assets/web.png";
export { default as html } from "../assets/html.png";
export { default as css } from "../assets/css.png";
export { default as javascript } from "../assets/javascript.png";
export { default as typescript } from "../assets/typescript.png";
export { default as reactjs } from "../assets/reactjs.png";
export { default as redux } from "../assets/redux.png";
export { default as expo } from "../assets/expo.png";
export { default as phaserPlanetSmall } from "../assets/phaser-planet-small.png";
export { default as phpIcon } from "../assets/php.png";
export { default as wordpressIcon } from "../assets/wordpress.png";
export { default as frontendIcon } from "../assets/frontend.png";
export { default as unilorin } from "../assets/unilorin.png";
export { default as waltersGarment } from "../assets/walters garment.png";
export { default as nodejs } from "../assets/nodejs.png";
export { default as git } from "../assets/git.png";
export { default as figma } from "../assets/figma.png";
export { default as Codecademy } from "../assets/company/Codecademy.png";
