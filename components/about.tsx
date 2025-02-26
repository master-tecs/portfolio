"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>  
      <p className="mb-3">A Developer Who Loves Problem-Solving & Innovation</p>  

      <p className="mb-3">  
        After graduating high school, I decided to pivot towards my passion for technology. I pursued further education in <span className="font-medium">Computer Science</span> and enrolled in coding programs to build a solid foundation in full-stack web development.  
        <span className="italic"> My favourite part of programming</span> is the challenge of solving complex problems and bringing ideas to life through code. I <span className="underline">love</span> building intuitive, scalable, and user-friendly web applications. My core stack includes  
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also experienced with TypeScript, Express, and REST APIs. I am always eager to learn and explore new technologies. Right now, I’m looking for a  
        <span className="font-medium">front-end developer</span> role where I can contribute and grow.  
      </p>  

      <p>  
        <span className="italic">When I'm not coding</span>, you’ll find me playing basketball, watching tech talks, or working on passion projects. I enjoy <span className="font-medium">learning new things</span>, from software development best practices to personal growth and productivity strategies.  
      </p>  
    </motion.section>
  );
}
