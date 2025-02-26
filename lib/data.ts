import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airImg from "@/public/Air.png";
import AllShop from "@/public/AllShop.png";
import schoolabroad from "@/public/schoolabroad.png";
import profilePic from "@/public/profile.jpeg";
import { link } from "fs";

export const info = {
  firstName: "Abdul-Wahab",
  lastName: "Abdurrasheed",
  title: "Full-Stack Developer",
  description: "Full-Stack Developer",
  email: "masterawahab@gmail.com",
  phone: "+1 (437) 221-1910",
  address: "179 Trail Rigde ln, Markham, ON, Canada",
  github: "https://github.com/master-tecs",
  linkedin: "https://www.linkedin.com/in/abdul-wahab-abdurrasheed-6231341b9/",
  profilePic: profilePic,
};

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Doha, Qatar",
    description:
      "Worked as a front-end developer for two years, contributing to multiple projects that focused on building interactive and user-friendly web applications. During this time, I enhanced my skills in React, JavaScript, and modern UI frameworks, eventually expanding into full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Kaduna, Nigeria",
    description:
      "Gained further experience in front-end development, working on projects that emphasized performance optimization, responsive design, and seamless user experiences. Continued expanding my expertise in React and Next.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer & Freelancer",
    location: "Toronto, ON",
    description:
      "Currently working as a full-stack developer and freelancer, building scalable web applications with React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Passionate about creating efficient, high-performance solutions. Open to full-time opportunities in front-end or full-stack development.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;
export const projectsData = [
  {
    title: "School Abroad",
    description:
      "School Abroad is your ultimate guide to studying overseas. From finding the best universities to application tips and scholarship opportunities, School Abroad helps you navigate every step of your international education journey with ease.",
    tags: ["React", "Next.js", "MongoDB", "Bootstrap", "Framer"],
    imageUrl: schoolabroad,
    link: "https://www.schoolabroad.org/"
  },
  {
    title: "Air (AI Resume Generator)",
    description:
      "Air is an AI-powered resume generator that helps you create professional, tailored resumes in minutes. With smart suggestions and easy customization, Air makes job applications faster and more efficient.",
    tags: ["React", "Vite", "LLM API", "Tailwind"],
    imageUrl: airImg,
    link: "https://unique-valkyrie-38b7fa.netlify.app/"
  },
  {
    title: "AllShops",
    description:
      "AllShops is an easy-to-use online marketplace where users can buy and sell a wide range of products. With secure payments, direct messaging, and a seamless shopping experience, AllShops connects buyers and sellers in a hassle-free way. Start exploring today!",
    tags: ["React", "TypeScript", "SASS", "Redux"],
    imageUrl: AllShop,
    link: "https://mshops.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Laravel",
  "ISO development",
  "Swift",
  "SQL"
] as const;
