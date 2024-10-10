import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { calculateSizes } from "../utils/calculateSizes";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import Button from "../components/Button";

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col text-white"
    >
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36">
        <p className="text-center font-generalsans text-2xl font-medium text-white sm:text-3xl">
          Hello there <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>

        <div className="absolute inset-0 h-full w-full">
          {/* <Leva /> */}
          <Canvas className="h-full w-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  // position={isMobile ? [1, -5, 2] : [1, -9, 2]}
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                />
              </HeroCamera>

              {!(isMobile || isSmall) && (
                <group>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition} />
                  <Rings position={sizes.ringPosition} />
                </group>
              )}

              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
            </Suspense>
          </Canvas>
        </div>

        <div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
          <a href="#about" className="w-fit">
            {/* Call to action */}
            <Button isBeam containerClass="sm:w-fit w-full sm:min-w-96">
              Let&apos;s work together
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
