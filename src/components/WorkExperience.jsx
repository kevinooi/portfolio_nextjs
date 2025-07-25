"use client";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { styles } from "../app/styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const WorkExperience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(WorkExperience, "work");

const ExperienceCard = ({ experience }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background: "#115e59",
                    color: "#000",
                }}
                contentArrowStyle={{ borderRight: "7px solid #115e59" }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <Image
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-[60%] h-[60%] object-contain"
                        />
                    </div>
                }
            >
                <div>
                    <h3 className="text-white text-[24px] font-bold">
                        {experience.title}
                    </h3>
                    <p
                        className="text-white text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </p>
                </div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </VerticalTimelineElement>
        </div>
    );
};
