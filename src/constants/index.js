import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  IBM,
  starIndia,
  MMT,
  Fewcents,
  varun,
  dadoo
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer-Frontend",
    company_name: "Viacom 18",
    icon: starIndia,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "● Integrated midroll ads into Connected TV (CTV) platforms.",
      "● Developed a caching mechanism to optimize the delivery of display ads.",
      "● Enhancing the ad experience on the H5-TV React application for better performance and user engagement.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Makemytrip",
    icon: MMT,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2024",
    points: [
      "● Created an integrated business library to enhance code management, efficiently address issues, and seamlessly implement features across various platforms and brands, resulting in a 30% reduction in development time.",
      "● Crafted an automated script designed to seamlessly upload source map files from the React application to Sentry, thereby enhancing the debugging process and facilitating a more efficient issue tracking system.",
      "● Engineered a consolidated npm package to merge UI designs across brand platforms, incorporating distinct hooks, themes, and brand elements. This integration catalyzed a remarkable 50% efficiency surge for QA and dev teams.",
      "● Enhanced web applications by implementing ESLint to maintain code consistency, enhance code quality, and utilizing Husky pre-commit hooks for automated checks.",
      "● Developed a caching middleware utilizing a fetch interceptor, tailored to optimize performance based on the unique identifier, bookingId.",
      "● Migration of Webpack from version 3 to 5, integrating module federation, led to a notable 20% reduction in bundle size.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fewcents",
    icon: Fewcents,
    iconBg: "#383E56",
    date: "September 2021 - May 2022",
    points: [
      "● Enhanced user experience by integrating three or more social login options, delivering smooth and effortless login capabilities, resulting in a notable 12% increase in login rates.",
      "● Improved payment checkouts by seamlessly integrating Stripe, adding 6+ payment methods, and enabling transactions in 100+ currencies, leading to a significant doubling of conversion rates.",
      "● Engineered a Common Script enabling real-time display of Tipjar or Paywall based on client parameters; integration led to a 40% increase in user engagement and a 25% surge in revenue.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "IBM India",
    icon: IBM,
    iconBg: "#383E56",
    date: "July 2019 - September 2021",
    points: [
      "● Effectively transitioned a Web Application from ActionScript to React, encompassing over 160 catalogs showcasing diverse AT&T Products.",
      "● Collaborated closely with the frontend team to enhance application performance, achieving a 20% reduction in load times through code optimization, integration of native functionalities, and elimination of unnecessary dependencies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Paras is one of the rare developers who always got instrumentation right without needing verbatim specs. In a 0-1 company where founders play product manager role, they do not have time to setup tracking and thinking about scalability for the future as much as they should. But Paras always had our back.",
    name: "Abhishek Dadoo",
    designation: "CEO",
    company: "Fewcents",
    image: dadoo,
  },
  {
    testimonial:
"I got a chance to work with Paras in IBM. He was leading the development side of the projects and the way he managed those projects was amazing. Being a fresher I had no idea how things work and what goes where, at that time Paras groomed me in the best way. He is a focused guy with lots of talents whether it's frontend or backend. Once he is onto something he just gets it done. I owe him a lot for my career growth and emotional support throughout our working tenure in IBM.",
name: "Varun Singh Inda",    
designation: "Senior Software Engineer",
    company: "Morgan Stanley",
    image: varun,
  },
];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
