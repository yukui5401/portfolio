"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import ParticleContainer from "./particle-container";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.span
            className="relative bottom-0 right-0 text-5xl text-white font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.8,
            }}
          >
            Hi, I&apos;m <span className="text-yellow-300">Brooke</span>.
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-lg !leading-[1.5] text-white max-w-[60rem] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.5,
          duration: 0.5,
        }}
      >
        I&apos;m a 2nd year Math student at the{" "}
        <span className="text-yellow-300">University of Waterloo</span> with a
        solid foundation in software development, specializing in microservices
        architecture, serverless computing, and AI/ML technologies. I strive to
        develop solutions that not only solve problems but also set new
        standards for excellence and efficiency.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-gray-100 px-3 py-1.5 flex items-center gap-2 rounded-md outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-gray-950"
          href="https://github.com/yukui5401"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-80" />
        </a>
        &ensp;
        <a
          className="group bg-gray-950 text-white px-3 py-1.5 flex items-center gap-2 rounded-md outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-white border-opacity-40"
          href="https://www.linkedin.com/in/brooke-yang/"
          target="_blank"
        >
          <span className="opacity-90">LinkedIn</span>
          <BsLinkedin className="opacity-80" />
        </a>
      </motion.div>
    </section>
  );
}
