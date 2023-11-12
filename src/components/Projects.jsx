"use client";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../app/styles";
import { darkgithub } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} animate={{ opacity: 1 }}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          animate={{ opacity: 1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. These projects are briefly described
          with links to code repositories in it. It reflects my ability to solve complex problems, work with different technologies, and
          manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "project");

const ProjectCard = ({ index, name, description, tags, image, source_code_link, preview_url }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} animate={{ opacity: 1 }}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-teal-800 p-5 rounded-2xl sm:w-[360px] w-full shadow-card">
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          {!imgLoaded && <div className="absolute inset-0 shimmer rounded-2xl" />}

          <Image
            src={image}
            alt="project_image"
            fill
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`object-cover rounded-2xl transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image src={darkgithub} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>

            {preview_url && (
              <div
                onClick={() => window.open(preview_url, "_blank")}
                className="black-gradient h-10 w-10 p-1.5 rounded-full flex justify-center items-center cursor-pointer"
              >
                <EyeIcon />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] text-[#3F4A4F] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
