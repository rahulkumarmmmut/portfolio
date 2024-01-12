import React from "react";
import { CgPolaroid, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import android from "@/public/android.jpeg";
import mypass from "@/public/mypass.jpeg";
import comptiasecurity from "@/public/comptiasecurity.png";
import comptiacysa from "@/public/comptiacysa.png";
import securityknowledge from "@/public/securityknowledge.png";
import eccouncil from "@/public/eccouncil.png";
import mta1 from "@/public/mta1.png";
import mta2 from "@/public/mta2.png";
import colordetector from "@/public/colordetector.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "George Mason University",
    location: ["Graduate Teaching Assistant", "Fairfax, VA, USA"],
    description: [
      "Responsible for setting and maintaining course and lab work for graduate and undergraduate courses in Computer Networking (CYSE 230) and Cyber Security (CYSE 499/610).",
      "Worked to facilitate classroom learning for over 80 students every semester, including assignment and exam grading and feedback, conducting office hours, outlook email replies etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Dec 2023",
  },
  {
    title: "Virtually Testing Foundation",
    location: [
      "Cyber Security Intern and Enterprise Tester",
      "Remote - California, USA",
    ],
    description: [
      "Participated in the VT Cyber Security Internship to gain industry-level expertise in Kubernetes, hands-on VMware virtualization, and Network Security through Kube Academy courses and real-time bug identification.",
      "Earned promotion to Enterprise Tester and worked on the docker, MITRE ATT&CT Navigator and Cyber Kill Chain to find application. Also found bugs on AttackIQ courses.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Apr 2021",
  },
  {
    title: "Bluefire Redteam LLP",
    location: [
      "Vulnerability Assessment and Penetration Testing Intern",
      "Remote - Gujarat, India",
    ],
    description: [
      "Gained expertise in Vulnerability assessment, Penetration Testing, troubleshooting and Post-exploitation.",
      "Contributed to the company's website content with 2 research blogs and a case study and delivered a mainframe talk at a company event with excellent communication skills.",
    ],
    icon: React.createElement(FaReact),
    date: "Apr 2021 - June 2021",
  },
  {
    title: "Haryana Police",
    location: [
      "Cybersecurity Gurugram Police Internship",
      "Remote - Haryana, India",
    ],
    description: [
      "Participated in a rigorous boot camp conducted by the police IT cell covering essential modern-day cyber security standards and practices.",
      " Attended expert-delivered talks and lectures on topics spanning Social Media Crimes and Security, Financial Fraud, Cloud Security, Cryptocurrency Investigation, and Cyber Law.",
    ],
    icon: React.createElement(CgPolaroid),
    date: "June 2021 - July 2021",
  },
] as const;

export const educationData = [
  {
    title: "George Mason University",
    location: [
      "Master's of Science in Cybersecurit and Information Systems",
      "Fairfax, Virginia, United States",
    ],
    description: [
      "GPA: 3.8/4.0",
      "Relevant Coursework: Computer Networking, Hardware and Cyber-Physical Systems, Cybersecurity Engineering Fundamentals, Cloud Computing Security, Malware Reverse Engineering, Secure Software Programming, Penetration Testing and Digital Forensics, etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "August 2021 - December 2023",
  },
  {
    title: "Madan Mohan Malaviya University of Technology",
    location: [
      "Bachelor of Technology in Computer Science and Engineering",
      "Gorakhpur, Uttar Pradesh, India",
    ],
    description: [
      "GPA: 3.5/4.0",
      "Relevant Coursework: Artifical Intelligence, Database Systems, Parallel and Distributed Computing, Operating Systems, Web Technology, Intro to Machine Learning, etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "July 2017 - August 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Android Music Store",
    description:
      "An android application for a music store that needs to develop a customer loyalty program supported by an Oracle database backend.",
    tags: ["Java", "JSP", "Android Development", "Oracle", "SQL"],
    imageUrl: android,
    gitLink: [
      "https://github.com/rahulkumarmmmut/Android-Application--Music-Store",
    ],
  },
  {
    title: "MyPass Manager",
    description:
      "MyPass is a python application used for storing website login information, offering password generation and search functionality.",
    tags: ["Python", "JSON", "Tkinter"],
    imageUrl: mypass,
    gitLink: ["https://github.com/rahulkumarmmmut/PasswordManager"],
  },
  {
    title: "Word Analytics",
    description:
      "An Android application that assists color-blind individuals to be able to identify colors they are not able to see.",
    tags: ["Kotlin", "Retrofit", "Android Application"],
    imageUrl: colordetector,
    gitLink: ["https://github.com/rahulkumarmmmut/colordetection"],
  },
] as const;

export const certificatesData = [
  {
    title: "Comptia: Security+ CE",
    tags: [
      "Access Control",
      "Cryptography",
      "Threat Analysis",
      "Threat Detection",
      "Network Security",
      "Security Policies",
      "Disaster Recovery Planning",
    ],
    imageUrl: comptiasecurity,
  },
  {
    title: "Comptia: CySA+ CS0-003",
    tags: [
      "Threat and Vuln Management",
      "Security Operations & Monitoring",
      "Incident Response",
      "GRC Assessment",
      "Software and System Security",
      "Security Architecture and Toolset",
    ],
    imageUrl: comptiacysa,
  },
  {
    title: "Certificate of Cloud Security Knowledge V4",
    tags: [
      "Cloud Architecture Understanding",
      "Cloud Security Governance",
      "Data Security for Cloud Env",
      "Cloud Infrastructure Security",
      "Incident Response & Disaster Rec",
    ],
    imageUrl: securityknowledge,
  },
  {
    title: "EC-Council: Certified Ethical Hacker",
    tags: [
      "Vulnerability Assessment",
      "Social Engineering Attacks",
      "Malware Threat Analysis",
      "Hacking Mobile Platform",
      "Footprinting and Reconnaissance",
    ],
    imageUrl: eccouncil,
  },
  {
    title: "MTA: Security Fundamental",
    tags: [
      "Security Layers",
      "Operating System Security",
      "Network Security",
      "Security Protocol and Standard",
      "Software Security",
    ],
    imageUrl: mta1,
  },
  {
    title: "MTA: Networking Fundamentals",
    tags: [
      "Networking Infrastructure",
      "Network Hardware",
      "Protocols and Services",
      "Network Security",
      "TCP/IP Configuration",
      "Wireless Networking",
    ],
    imageUrl: mta2,
  },
] as const;

export const skillsData = [
  "Python",
  "Bash Scripting",
  "MySQL",
  "R Language",
  "C Language",
  "HTML",
  "CSS",
  "Git",
  "OSINT",
  "OWASP",
  "SEIM",
  "ISO 27001",
  "ISO 27002",
  "HIPPA",
  "GDPR",
  "NIST",
  "PCI DSS",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Dirbuster",
  "John the Ripper",
  "Ettercap",
  "Aircrack-ng",
  "Nessus",
  "Acunetix",
  "Splunk",
  "Malware Reverse Engineering",
  "Cryptography",
] as const;
