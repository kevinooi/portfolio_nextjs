"use client";
import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {technologies.map((tech) => (
        <div key={tech.name} className="relative w-32 h-32 group [perspective:1000px]">
          {/* Outer wrapper handles animations */}
          <div className="w-full h-full animate-[orbit_8s_linear_infinite,bounce_4s_ease-in-out_infinite]">
            {/* Inner wrapper handles 3D flip */}
            <div
              className="relative w-full h-full transition-transform duration-700 
                 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 rounded-full shadow-2xl flex items-center justify-center 
                        bg-gradient-radial from-white via-[#d8f3dc] to-[#0f766e] 
                        [backface-visibility:hidden]"
              >
                <img
                  src={tech.icon.src}
                  alt={tech.name}
                  className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 rounded-full shadow-xl flex items-center justify-center 
                        bg-[#E2E8DF] backdrop-blur-md text-sm font-semibold text-secondary
                        [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                {tech.name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

{
  /* <div className="w-28 h-28" key={technology.name}>
  <BallCanvas icon={technology.icon} />
</div>; */
}
