import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import intuitscape from "@/public/intuitscape.png";
import devducky from "@/public/devducky.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "HosTalky",
    description:
      "Co-founded the Artificial Intelligence (AI) project for the mobile app, developing end-to-end Automatic Speech Recognition (ASR) solutions to expedite user workflows. Deployed AWS cloud services for facilitating API requests, improving data security and ensuring HIPAA compliance.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
  },
  {
    title: "Curriculum Developer",
    location: "Kids Coding School",
    description:
      "Organized and led workshops in game design, instructing coding classes over two 4-week programs. Contributed to promotional activities aimed at researching and identifying areas for curriculum enhancement.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "devDucky @ Hack the 6ix 2024",
    description:
      "An all-in-one IDE developer tool for code analysis and AI-generated feedback, leveraging speech-to-text functionalities and fine-tuned LLMs for code completion to enhance the programming experience.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "devicon:javascript",
      "devicon:react",
      "logos:nodejs-icon",
      "devicon:python",
      "logos:flask",
      "devicon:typescript",
      "devicon:mongodb",
      "logos:express",
      "devicon:vitejs",
      "devicon:html5",
      "devicon:tailwindcss",
    ],
    imageUrl: devducky,
    githubLink: "https://github.com/yukui5401/devDucky2024",
    demoLink: "https://devpost.com/software/devducky",
  },
  {
    title: "Intuitscape @ GenAI Genesis 2024",
    description:
      "An eLearning platform that scrapes the web for educational material and organizes it into interactive concept maps. Designed to help users visualize and engage with complex concepts.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "devicon:python",
      "logos:google-cloud",
      "logos:javascript",
      "logos:react",
      "logos:flask",
      "logos:nodejs-icon",
      "logos:vitejs",
      "devicon:html5",
      "devicon:css3",
    ],
    imageUrl: intuitscape,
    demoLink: "https://devpost.com/software/prezi-but-with-ai",
    githubLink: "https://github.com/yukui5401/Intuitscape",
  },
  // {
  //   title: "Company Asset Trading",
  //   description:
  //     "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
  //   tags: ["Java", "MariaDB", "Swing"],
  //   icons: ["logos:java", "logos:mariadb-icon"],
  //   imageUrl: assetTradingImg,
  //   githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  // },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  // {
  //   title: "Techprowl Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
  //   urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "AWS",
    icon: "devicon:amazonwebservices-wordmark",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Haskell",
    icon: "devicon:haskell",
  },
  {
    name: "C",
    icon: "devicon:c",
  },
  {
    name: "C",
    icon: "devicon:cplusplus",
  },
  {
    name: "Bash",
    icon: "devicon:bash",
  },
  {
    name: "PyTorch",
    icon: "devicon:pytorch",
  },
  {
    name: "Express",
    icon: "devicon:express",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
  {
    name: "Vite",
    icon: "devicon:vitejs",
  },
  {
    name: "Postman",
    icon: "devicon:postman",
  },
  {
    name: "GitHub",
    icon: "devicon:github",
  },
  {
    name: "Flask",
    icon: "devicon:flask",
  },
] as const;
