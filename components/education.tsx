"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import uwLogo from "@/public/uw-logo.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={uwLogo} alt="UW" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Honours Mathematics, Bachelor of Mathematics
          </p>
          <p>University of Waterloo</p>
          <p className="mt-1">September 2023 - April 2028 (Expected)</p>
          <p className="my-1">Relevant courses:</p>
          <ul className="list-disc pl-6">
            <li>CS 145 - Designing Functional Programs (Advanced)</li>
            <li>MATH 145 - Algebra (Advanced)</li>
            <li>MATH 147 - Calculus 1 (Advanced)</li>
            <li>
              CS 146 - Elementary Algorithm Design and Data Abstraction
              (Advanced)
            </li>
            <li>MATH 136 - Linear Algebra 1 (Honours)</li>
            <li>MATH 138 - Calculus 2 (Honours)</li>
            <li>CS 245 - Logic and Computation</li>
            <li>CS 246 - Object-Oriented Software Development</li>
            <li>MATH 235 - Linear Algebra 2 (Honours)</li>
            <li>STAT 230 - Probability</li>
            <li>CS 234 - Data Types and Structures</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
