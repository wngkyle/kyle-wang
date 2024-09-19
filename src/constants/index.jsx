import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import aquivio from "../assets/aquivio-1.png";
import eVTOL from "../assets/eVTOL-1.png";
import pickplace from "../assets/pickplace-1.png";
import embeddedsentry from "../assets/embeddedSentry-1.png";
import processor120 from "../assets/processor120-1.png"
import musicapp from "../assets/musicapp-1.png";
import calculator from "../assets/calculator-1.png";
import tictactoe from "../assets/tictactoe-1.png";
import modula from "../assets/modula-1.png";

export const NAVIGATION_LINKS = [
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "KYLE WANG",
  greet: "Hello! 👋🏻👋🏻",
  description:
    "I am a passionate hardware and software engineer driven by a commitment to create impactful and cutting-edge technology.",
}

export const PROJECTS = [
  {
    id: 1,
    name: "Aquivio App",
    description:
      "A multi-platform mobile ordering application designed to enhance user convenience and engagement.",
    image: aquivio,
    href: "/aquivio",
  },
  {
    id: 1,
    name: "Aeronova eVTOL",
    description:
      "A transformable aircraft that combines traditional gliding aerodynamics with vertical take-off and landing capabilities.",
    image: eVTOL,
    href: "/evtol",
  },
  {
    id: 2,
    name: "Pick-And-Place Robot Controller",
    description:
      "A resolve rate motion controller that focuses on end-effector space movement for the 7 joints Frank-Emika Robot.",
    image: pickplace,
    href: "/pickandplace",
  },
  {
    id: 3,
    name: "Embedded Sentry",
    description:
      "A gesture-controlled lock that allows users to lock and unlock with a custom-defined hand gesture.",
    image: embeddedsentry,
    href: "/embeddedsentry",
  },
  {
    id: 4,
    name: "Processor 120",
    description:
      "A 16-bit assembler and dissembler capable of handling more than 16 different x86 instructions in assembly and binary form.",
    image: processor120,
    href: "/processor120",
  },
  {
    id: 5,
    name: "Modula",
    description: 
      "A portable smart cooling pad that monitors internal device temperature and CPU activity to optimize cool performance.",
    image: modula,
    href: "/modula",
  },
  {
    id: 6,
    name: "LyricStream",
    description:
      "A Spotify Web App that allows users to access the entire Spotify music library while providing lyrics in play mode.",
    image: musicapp,
    href: "/musicapp",
  },
  {
    id: 7,
    name: "iCalc",
    description:
      "A user-friendly calculator built using React Javascript framework.",
    image: calculator,
    href: "/calculator",
  },
  {
    id: 8,
    name: "Tic-Tac-Toe Pro",
    description:
      "An interactive tic-tac-toe game with backtrack ability that allows players to revisit previous steps.",
    image: tictactoe,
    href: "/tictactoe",
  },
];

export const BIO = [
  "My journey into engineering began at the age of ten when my dad challenged me to build a rubber band gun using tree branches we collected from the backyard. From that moment, \
  I was hooked—captivated by the process of transforming ideas into reality and bridging the gap between imagination and the tangible world through creative problem-solving.",

  "Fast forward to today, I’m pursuing a major in Computer Engineering and a minor in Cybersecurity, a decision I consider one of the best I’ve made in my life. At school, I’ve been fortunate \
  to meet an incredible group of friends, with whom I’ve worked on a wide range of projects. Through these experiences, I’ve learned engineering is not only about technical expertise \
  and finishing every sprint but also about effective communication and building strong relationships with the people you collaborate with.",

  "Over the summer of my second year, I worked full-time as an Embedded Systems Software Engineer at Aquivio and as a Software Engineer Intern at WOD. By day, I troubleshot circuits, \
  designed PCBs, and developed embedded systems. By night, I built APIs and structured database schemas for efficient query operations. It was indeed a challenging time but extremely \
  rewarding. In the following year, I took on a full-time role at Bright Toward Industrial as an R&D Engineer while completing my military service in Taiwan. During this period, I gained \
  in-depth knowledge of semiconductor manufacturing and led the development of various test systems from the ground up. I also contributed to improving operational efficiency by building \
  a full-stack app that automated the company’s data processing workflow. These experiences solidified my expertise in both hardware and software engineering and taught me the value of \
  adaptability and innovation in problem-solving.",

  "Outside of work, I’m an avid sports enthusiast. I’ve been playing ice hockey for over sixteen years and served as captain of the U18 and U20 National Team in 2020 and 2022 to compete in IIHF World Championships. \
  I’m also passionate about diving, having spent four months working as a scuba and freediving instructor on Liuqiu Island, located off the southwest coast of Taiwan, before starting college. When I’m not \
  working or playing sports, you’ll likely find me immersed in a good book or watching a Christopher Nolan film at the theater :)",
];

export const HARDWARE_SKILLS = [
  {
    name: "Embedded System Design",
    experience: "3+ years",
  },
  {
    name: "Circuit Design",
    experience: "3+ years",
  },
  {
    name: "PCB Development",
    experience: "3+ years",
  },
  {
    name: "EMI, PI, and SI Management",
    experience: "1+ year",
  },
  {
    name: "Power Electronics",
    experience: "3+ years",
  },
  {
    name: "Semiconductor Testing",
    experience: "1+ year",
  },
  {
    name: "Test System Design",
    experience: "1+ year"
  },
  {
    name: "Prototpying",
    experience: "4+ years",
  },
  {
    name: "EagleCAD",
    experience: "3+ years",
  },
  {
    name: "Altium",
    experience: "2+ years",
  },
  {
    name: "Fusion 360",
    experience: "1+ years",
  },
  {
    name: "Oscilloscope",
    experience: "3+ years",
  },
  {
    name: "Waveform Generator",
    experience: "3+ years",
  },
  {
    name: "X-ray Inspection",
    experience: "1+ years",
  },
  {
    name: "High Power Test Systems",
    experience: "1+ year"
  }

]

export const SOFTWARE_SKILLS = [
  {
    name: "Embedded Software",
    experience: "3+ years",
  },
  {
    name: "RTOS",
    experience: "1+ year"
  },
  {
    name: "FreeRTOS",
    experience: "1+ year",
  },
  {
    name: "LabVIEW",
    experience: "1 year",
  },
  {
    name: "PID Control",
    experience: "3+ years"
  },
  {
    name: "React",
    experience: "3+ years",
  },
  {
    name: "React Native",
    experience: "2+ years",
  },
  {
    name: "AWS",
    experience: "1 year",
  },
  {
    name: "PostgreSQL",
    experience: "1.5+ years",
  },
  {
    name: "SQLite",
    experience: "1+ year",
  },
  {
    name: "Node.js",
    experience: "2+ years",
  },
  {
    name: "Flask",
    experience: "2+ years",
  },
  {
    name: "Electron",
    experience: "1+ year",
  },
  {
    name: "Mobile App Development",
    experience: "2+ years",
  },
  {
    name: "Fullstack Development",
    experience: "2+ years",
  }
];

export const LANGUAGES = [
  "C", "C++", "Java", "Python", "Javscript", "Typescript", "GraphQL", "SQL", "Verilog", "HTML/CSS"
]

export const EXPERIENCES = [
  {
    title: "Embedded System Engineer / R&D Engineer",
    company: "Bright Toward Industrial Co., Ltd",
    duration: "January 2024 - August 2024",
    description: [
      "Engineered a high-voltage SiC and GaN MOSFET test system with HTRB and HTGB capabilities for TSMC, accommodating up to 96 devices per test and boosting test efficiency by 300%.",
      "Designed and implemented Single-In-Line (SIP) reed relay reliability test system measuring mechanical bounce, static contact resistance, and dynamic contact resistance for precise lifetime prediction and product classification.",
      "Modularized test systems with replaceable control unit and components, reducing downtime and costs by 95%.",
      "Developed embedded software on ARM Cortex-M7 processor for real-time automated control and measurement.",
      "Architected full-stack application using React, Electron, and Flask automating wafer test result analysis and visualization, improving team productivity by 85%.",
      "Designed multi-layer PCBs with arc prevention and optimized EMI, SI, and PI, reducing system failure to 0%.",
    ]
  },
  {
    title: "Embedded System Engineer",
    company: "Aquivio, Inc.",
    duration: "June 2023 - January 2024",
    description: [
      "Created responsive app on iOS and Android using React Native and Expo, 1000+ downloads in three months.",
      "Built React admin environment interfacing with embedded programs for metric tracking, 500+ metrics daily.",
      "Integrated overcurrent and overvoltage protection in control circuits, reducing inductive kickbacks by over 90%.",
      "Developed PID-controlled self-calibrating algorithms for beverage dispensing, enhancing precision by 23%.",
      "Achieved $1,100 monthly cost reduction and facilitated troubleshooting by designing smaller, more compact PCBs with optimized design rules.",
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "WOD. co",
    duration: "June 2023 - August 2023",
    description: [
      "Developed user-focus workout encyclopedia, 2,000+ visits and 8% engagement increase in four months.",
      "Deployed PostgreSQL and SQLite databases on AWS and Hasura, storing 5000+ workouts and user accounts.",
      "Constructed database schema and API using GraphQL and JavaScript, boosting query efficiency by 16%.",
    ]
  },
  {
    title: "Electrical Engineer Intern",
    company: "New York University UltraViolet RoboMaster Team",
    duration: "September 2022 - June 2023",
    description: [
      "Led the development of high-performance supercapacitor supplying 2000J additional power to the robot.",
      "Devised crowbar circuits for the power system to safeguard against overvoltage conditions.",
      "Implemented a 3S battery management system with overvoltage and overcurrent protection to ensure safe and efficient balance charging.",
      "Collaborated with a team of more than 15+ engineers to create hardware solutions and new PCBs, enhancing the overall performance by more than 50%.",
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "New York University RoboSub Team",
    duration: "January 2022 - May 2022",
    description: [
      "Automated the data augmentation process using Python OpenCV and Pillow library generating over 6000 modified images for training machine learning model.",
      "Enhanced dataset quality by performing different image processing methods, including threshold-based image segmentation, spatial filtering, image scaling, and pixel intensity transformation, to reduce noise on images.",
    ]
  },
  
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering (Cybersecurity Minor)",
  institution: "New York University",
  duration: "January 2022 - Present",
  award: "2022 and 2023 Dean's List Academic Award",
  description: 
    "Specialized in hardware and software application development. Awarded NYU Prototyping Fund in both 2022 and 2023 to develop two innovative projects: \
    Modula, a portable smart cooling pad that monitors internal device temperatures, CPU usage, and memory activity to optimize cooling performance, \
    and Aeronova, an electric vertical take-off and landing (eVTOL) aircraft designed to integrate the efficiency of gliding aerodynamics with the convenience of runway-independent flight. \
    Actively involved in robotics clubs and hackathons, contributed to various projects that utilized skills in circuit design, power electronics, embedded systems, PCB development, \
    and full-stack development. Currently leading a multidisciplinary project team under Professor Matthew Campisi to develop \
    cutting-edge semiconductor test system.",
  coursework:
    "Courses taken include Embedded System Design, Circuits, Electronics I and II, Operating System, Computer Architecture, Computer Networking, Computer Security, Digital Logic and State machine, \
    Robotics Manipulation and Locomotion, Data Structures, Algorithms, Object Oriented Programming.",
};

export const CONTACTS = [
  {
    href: "https://www.instagram.com/kyle.wng/",
    icon: <FaInstagram fontSize={65} className="opacity-90 hover:opacity-80" />,
  },
  {
    href: "https://github.com/wngkyle",
    icon: <FaGithub fontSize={65} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/kylewang13/",
    icon: <FaLinkedin fontSize={65} className="hover:opacity-80" />,
  },
  {
    href: "mailto:kylewang@nyu.edu",
    icon: <MdOutlineEmail fontSize={65} className="hover:opacity-80" />,
  }
];
