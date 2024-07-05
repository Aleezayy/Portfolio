import {
  creator,
  laravel,
  fabric,
  hamza,
  dalda,
  terminal,
  alpine,
  icpc,
  visiospark,
  tailwind,
  redis,
  minecraft_fabric,
  nextjs,
  shortestdistance,
  unity,
  python,
  excel,
  cpp,
  csharp,
  java,
  threejs,
  openpyxl,
  royalHonda,
} from "../assets";

import pawno from "../assets/pawno.png";
import cust from "../assets/cust.png";
import minecraft from "../assets/minecraft1.jpg";
import lingoLearner from "../assets/lingoLearner.jpeg";
import shield from "../assets/shield.jpg";
import akr from "../assets/akr.svg";
import owl from "../assets/owl.svg";

import {
  FaDiscord,
  FaGithub,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

const contacts = [
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discordapp.com/users/iLOGIC#8960",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/ni9logic",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://fb.com/iamtorchy",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/hassnnay",
  },
];

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
    title: "UX/UI Designer",
    icon: creator,
  },
  {
    title: "Unity Game Developer",
    icon: unity,
  },
  {
    title: "PyExcel Developer",
    icon: openpyxl,
  },
  {
    title: "Minecraft Modder",
    icon: fabric,
  },
  {
    title: "NextJS Developer",
    icon: nextjs,
  },
  {
    title: "Redis Cache Database",
    icon: redis,
  },
  {
    title: "ICPC Regional 2022",
    icon: icpc,
  },
  {
    title: "Visiospark 2022",
    icon: visiospark,
  }
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Fabric",
    icon: fabric,
  },
  {
    name: "Openpyxl",
    icon: openpyxl,
  },
  {
    name: "AlpineJS",
    icon: alpine,
  },
  {
    name: "Terminal",
    icon: terminal,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Pawno Scripter",
    company_name: "Code Zero @ GTA San andreas",
    icon: pawno,
    iconBg: "#43009F",
    date: "July 2017 - Sep 2019",
    points: [
      "Managing user database",
      "Maintaining high performant code",
      "Fixing any bad experiences players face",
      "Responsible for website as well as in-game features",
    ],
  },
  {
    title: "Python Developer",
    company_name: "Dalda Distributions",
    icon: dalda,
    iconBg: "#43009F",
    date: "March 2022 - December 2022",
    points: [
      "Developing and automating as many tasks as possible for the company",
      "Created a tool that automates a task that would typically take a human 30 days to complete. However, my tool can accomplish the same work in mere seconds.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Lab Assistant",
    company_name: "C.U.S.T @ Object Oriented Programming",
    icon: cust,
    iconBg: "#43009F",
    date: "Feb 2022 - Jun 2022",
    points: [
      "Managing multiple students at the same time",
      "Resolve any issue a student faces in their coding progress",
      "Teach students Object Oriented Programming",
    ],
  },
  {
    title: "Database Administrator",
    company_name: "Hypixel & Vortex",
    icon: minecraft,
    iconBg: "#43009F",
    date: "Mar 2023 - May 2023",
    points: [
      "Responsible for players database",
      "Responsible for providing statistics of database",
    ],
  },
  {
    title: "Minecraft Mod Creator",
    company_name: "Fabric Community",
    icon: fabric,
    iconBg: "#43009F",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Created Various mods using java in minecraft for fabric community",
      "Users would request for a certain custom mod and my responsibility was to complete player demands if feasible",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hassan has created a tool for me that automated my 30 days of work into mere half of second.",
    name: "Hamza Awan",
    designation: "SEO",
    company: "Dalda Distributions",
    image: hamza,
  },
  {
    testimonial:
      "What a fantastic tool for us that has made our work much easier and faster. We are very happy with his work. Each day he surprised us with a new feature.",
    name: "Zubair",
    designation: "Employee",
    company: "Royal Honda",

  },
  {
    testimonial:
      "I am personally satisfied with his work, the way he made our job easier is just fantastic. I am very happy with his work.",
    name: "Abid",
    designation: "Employee",
    company: "Royal Honda",

  },
];

const projects = [
  {
    name: "Royal Honda",
    description:
      "A complex file management system for Royal Honda that allows them to manage their files and documents in a more efficient way. It also includes a feature that allows them to search for files and documents using a keyword.",
    tags: [
      {
        name: "nextJS-14",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "blue-text-gradient",
      },
    ],
    image: royalHonda,
    source_code_link: "https://royalhonda.vercel.app",
  },
  {
    name: "System Shield",
    description:
      "A project through which users can monitor track their computer's usage and detects any sort of abnormality in their hardware of upto 100 of computers at the same time.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "text-red-500",
      },
      {
        name: "Digital Ocean",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "text-cyan-600",
      },
      {
        name: "Machine Learning",
        color: "text-green-600",
      },
      {
        name: "DLL Files Management",
        color: "text-yellow-600",
      },
    ],
    image: shield,
    source_code_link: "https://github.com/Ni9Logic/FYP_TERM241.git",
  },
  {
    name: "AKR Restaurant",
    description:
      "A website for a restaurant designed for them located in Saudia Arabia applied SEO techniques on it so that it comes first at top of google search results.",
    tags: [
      {
        name: "NextJS",
        color: "text-red-500",
      },
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: akr,
    source_code_link: "https://www.akrrestaurant.com/",
  },
  {
    name: "Minecraft Mod",
    description:
      "I have developed a sophisticated mod that utilizes machine learning algorithms to automate user tasks, such as retrieving data from server chat, solving mini games, auto-replying to friends, and auto-clicking for efficient grinding. This mod combines advanced techniques to streamline processes, enhance user experience, and improve productivity, revolutionizing the way users interact with the system.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "fabric",
        color: "pink-text-gradient",
      },
    ],
    image: minecraft_fabric,
    source_code_link: "https://github.com/Ni9Logic/Minecraft-Modding",
  },
  {
    name: "Data Entry Automation",
    description:
      "I developed a groundbreaking software for Dalda-Distributions that automates data entry and presentation tasks. It has resulted in a remarkable 95 percent increase in task efficiency compared to manual processes. By leveraging automation, the software eliminates errors, accelerates data processing, and presents data in a visually appealing manner. This implementation has set new standards in data management and operational excellence, optimizing productivity for Dalda-Distributions.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Openpyxl",
        color: "pink-text-gradient",
      },
      {
        name: "PyPDF2",
        color: "blue-text-gradient",
      },
    ],
    image: excel,
    source_code_link: "",
  },
  {
    name: "Shortest Path Finder",
    description:
      "I have developed a Python visualization of the A* pathfinding algorithm, enabling users to select start and end locations and observe the process of finding the shortest path. This interactive tool allows for dynamic exploration and understanding of the widely-used A* algorithm. By setting start and end points, users can witness the algorithm intelligently navigating obstacles to determine the optimal path. The visualization serves as an educational resource, offering practical insights into the inner workings of the A* algorithm in a visually engaging manner.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pygame",
        color: "blue-text-gradient",
      },
      {
        name: "DFS",
        color: "pink-text-gradient",
      },
      {
        name: "BFS",
        color: "blue-text-gradient",
      },
    ],
    image: shortestdistance,
    source_code_link: "https://github.com/Ni9Logic/Shortest-Distance-Path",
  },
  {
    name: "Lingo Learner",
    description:
      "A android application which is available on playstore for kids to learn English Language",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Gradle",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: owl,
    source_code_link: "https://github.com/Ni9Logic/Lingo-Learner",
  },
  {
    name: "Final Year Project Portal",
    description:
      "A portal designed for all the members of Capital University of Science and technology to submit thier Final Year Project, Track progress of each other as well as track activities of each other. Project contains a messaging app well.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: cust,
    source_code_link: "https://github.com/m-abdullah-shakoor/CUST-FMS-FE",
  },
];

export { services, technologies, experiences, testimonials, projects, contacts };
