import { useState } from "react";

import Globe from "react-globe.gl";
import Button from "../components/Button";

function About() {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopy() {
    setIsCopying(true);
    await navigator.clipboard.writeText("himank7794@gmail.com");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsCopying(false);
  }

  return (
    <section id="about" className="c-space my-20">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid1.png`}
              alt="grid-1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">The name&apos;s Hridyanshu</p>
              <p className="grid-subtext">
                Just a curious developer who likes to try and test things out
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container items-center">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid2.png`}
              alt="grid-2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialise in Web development and Machine Learning
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28.644,
                    lng: 77.216,
                    text: "Delhi, India",
                    color: "white",
                    size: 50,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Able to work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I m based in India, with remote work available.
              </p>
              <a href="#contact" className="w-fit">
                <Button isBeam containerClass="w-full mt-10">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid3.png`}
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[256px]"
            />

            <div>
              <p className="grid-headtext">My passion for programming.</p>
              <p className="grid-subtext">
                I like to make my life easier with programming, automation and
                logic.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid4.png`}
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[128px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={isCopying ? `${import.meta.env.BASE_URL}assets/tick.svg` : `${import.meta.env.BASE_URL}assets/copy.svg`}
                  alt="copy"
                />
                <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
                  himank7794@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
