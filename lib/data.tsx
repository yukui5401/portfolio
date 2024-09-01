import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import intuitscape from "@/public/intuitscape.png";
import devducky from "@/public/devducky.png";
import hostalkyLogo from "@/public/hostalky_logo.jpeg";
import kidsCodingLogo from "@/public/kidscodingschool_to_logo.jpeg";
import Image from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
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
      "Co-founded the Artificial Intelligence (AI) project for the messaging app, developing end-to-end Automatic Speech Recognition (ASR) solutions to expedite user workflows. Deployed AWS cloud services for facilitating API requests, improving data security and ensuring HIPAA compliance.",
    // icon: React.createElement(CgWorkAlt),
    icon: <Image src={hostalkyLogo} alt="Icon" />,
    date: "May 2024 - Present",
    link: "https://www.hostalky.com/",
  },
  {
    title: "Curriculum Developer Intern",
    location: "Kids Coding School",
    description:
      "Organized and led workshops in game design, instructing coding classes over two 4-week programs. Contributed to promotional activities aimed at researching and identifying areas for curriculum enhancement.",
    // icon: React.createElement(CgWorkAlt),
    icon: <Image src={kidsCodingLogo} alt="Icon" />,
    date: "July 2023 - August 2023",
    link: "https://www.kidscoding.ca/",
  },
] as const;

export const projectsData = [
  {
    title: "devDucky @ Hack the 6ix 2024",
    description:
      "An all-in-one IDE developer tool for code analysis and AI-generated feedback, leveraging speech-to-text functionalities and fine-tuned LLMs for code completion to enhance the programming experience.",
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Flask",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Vite.js",
      "HTML",
      "Tailwind CSS",
    ],
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
    tags: [
      "Python",
      "Google Cloud",
      "JavaScript",
      "React",
      "Flask",
      "Node.js",
      "Vite.js",
      "HTML",
      "CSS",
    ],
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
