import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { myProjects } from "../constants";
import CanvasLoader from "../components/CanvasLoader";
import ProjectsDisplayComp from "../components/ProjectsDisplayComp";

const projectCount = myProjects.length;

function Projects() {
  const [projectInd, setProjectInd] = useState(0);
  const currentProject = myProjects.at(projectInd);

  function handleNavigation(direction) {
    if (direction === "previous") {
      setProjectInd((ind) => (ind === 0 ? projectCount - 1 : ind - 1));
    }

    if (direction === "next") {
      setProjectInd((ind) => (ind + 1) % projectCount);
    }
  }
  return (
    <section id="projects" className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
          <div className="absolute right-0 top-0">
            <img
              src={`${import.meta.env.BASE_URL}${currentProject.spotlight}`}
              alt="spotlight"
              className="h-96 w-full rounded-xl object-cover"
            />
          </div>

          <div
            className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter"
            style={currentProject.logoStyle}
          >
            <img
              src={`${import.meta.env.BASE_URL}${currentProject.logo}`}
              alt={`${currentProject.title.split(" ").at(0)}'s Logo`}
              className="h-10 w-10 shadow-sm"
            />
          </div>

          <div className="my-5 flex flex-col gap-5 text-white-600">
            <p className="animatedText text-2xl font-semibold text-white">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, ind) => (
                <div key={ind} className="tech-logo">
                  <img src={`${import.meta.env.BASE_URL}${tag.path}`} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="flex cursor-pointer items-center gap-2 text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} className="h-3 w-3" alt="arrow" />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/left-arrow.png`}
                alt="left arrow"
                className="h-4 w-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/right-arrow.png`}
                alt="right arrow"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-black-300 bg-black-200 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <ProjectsDisplayComp texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>

            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Projects;
