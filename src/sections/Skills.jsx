import { useEffect, useState } from "react";

import { skills } from "../constants";
import BallCanvas from "../components/BallCanvas";
import { isMobileBrowser } from "../utils/isMobileBrowser";

function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileBrowser());
  }, []);

  if (isMobile) return null;

  return (
    <section id="skills" className="c-space mb-12 mt-8 md:mb-20 md:mt-12">
      <p className="head-text">My Skills</p>
      <div className="mt-12 flex flex-wrap justify-center gap-7 md:-mx-10">
        {skills.map((skill) => (
          <div className="h-28 w-28" key={skill.name}>
            <BallCanvas icon={skill.icon}></BallCanvas>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
