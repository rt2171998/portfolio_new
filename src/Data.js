import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaInstagram />, <FaLinkedin />, <FaGithub />];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Rahul Tyagi",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91 7011417501",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "rt2171998@gmail.com",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    key: "Linkedin",
    value: "www.linkedin.com/in/rahul-tyagi-k24",
  },
];

export const icons = [
  { icon: <FaHtml5 />, text: "HTML 5" },
  { icon: <FaCss3 />, text: "CSS" },
  { icon: <DiJavascript />, text: "JavaScript" },

  {
    icon: <FaReact />,
    text: "React",
  },

  {
    icon: <FaSass />,
    text: "SASS",
  },
  { icon: <SiTailwindcss />, text: "Tailwind CSS" },
  {
    icon: <SiRedux />,
    text: "Redux",
  },
  {
    icon: <FaGithub />,
    text: "GitHub",
  },
  {
    icon: <DiResponsive />,
    text: "Responsive Design",
  },
  {
    icon: <TbBrandReactNative />,
    text: "React Native",
  },
  {
    icon: <FaJava />,
    text: "Java",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2020",
    position: "Mobile App Develoepr (Intern)",
    company: "TechTable",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: `Kanban Board - Trello Clone 
           --Add/ Edit tasks--
           Drag & Drop Tasks--
           multiple boards`,
    category: "web",
    link: "https://jira-clone-rt.netlify.app/",
  },
  {
    id: 2,
    img: work2,
    name: "Movix-- SPA--Routing--REST APIs--Responsive--Error Handling ",
    category: "web",
    link: "https://splendorous-panda-0ac639.netlify.app/",
  },
  {
    id: 3,
    img: work3,
    name: "AI NEWS--Control Webpage using AI--AI integration in react-- Multiple Usecases",
    category: "app",
    link: "https://neon-moonbeam-4d9b3b.netlify.app/",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "New Delhi, India ",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "rt2171998@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 7011417501",
  },
];
