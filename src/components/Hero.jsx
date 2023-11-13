"use client";

import { TypeAnimation } from "react-type-animation";
import { styles } from "../app/styles";
import { VoxelDogCanvas } from "./index";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="w-full mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-12 mx-auto">
                <div className="col-span-5">
                    <div
                        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center md:justify-start gap-5`}
                    >
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="w-5 h-5 rounded-full bg-[#804dee]" />
                            <div className="w-1 md:h-[350px] h-[250px] violet-gradient" />
                        </div>
                        <div className="z-10 text-start">
                            <h1
                                className={`${styles.heroHeadText} text-white mt-2`}
                            >
                                Hi, I&apos;m{" "}
                            </h1>
                            <h1
                                className={`${styles.heroHeadText} text-[#804dee]`}
                            >
                                <TypeAnimation
                                    sequence={[
                                        "Kevin",
                                        1000,
                                        "Web Developer",
                                        1000,
                                        "Mobile Developer",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h1>
                            {/* #915EFF */}
                            <p
                                className={`${styles.heroSubText} mt-2 text-white-100`}
                            >
                                I develop <br className="block xl:hidden" />
                                web and mobile applications
                            </p>
                            <div className="text-white mt-4 md:mt-12 lg:mt-20 xl:mt-24">
                                <Link
                                    href="#contact"
                                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#804dee] hover:bg-slate-200"
                                >
                                    Hire Me
                                </Link>
                                <Link
                                    href="/"
                                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-[#804dee] hover:bg-slate-800 mt-3"
                                >
                                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                        Download CV
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-7 relative place-self-center pt-96 md:pt-0">
                    <VoxelDogCanvas />
                </div>
            </div>
        </section>
    );
};

export default Hero;
