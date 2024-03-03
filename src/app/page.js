"use client";

import {
  Navbar,
  Hero,
  About,
  WorkExperience,
  Tech,
  Projects,
  Contact,
} from "../components";

const Home = () => {
  return (
    <div className="relative z-10 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <WorkExperience />
      <Tech />
      <Projects />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
