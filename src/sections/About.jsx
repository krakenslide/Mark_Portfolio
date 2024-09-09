import { useState } from 'react';
import Globe from 'react-globe.gl';
import { FaPython } from "react-icons/fa";
import Button from '../components/Button.jsx';
import { SiFastapi, SiPostgresql } from 'react-icons/si';
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGnubash } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Mark Vaz</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col justify-between h-full">
            <div className="flex justify-center items-center bg-transparent">
              <div className="grid grid-cols-3 gap-6 p-4 border border-transparent rounded-lg"
                   style={{ borderImage: 'linear-gradient(45deg, rgba(0,0,0,0), rgba(0,0,0,0.5)) 1' }}>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out">
                  <FaPython className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">Python</p>
                </div>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-green-500 hover:scale-110 transition duration-300 ease-in-out">
                  <SiFastapi className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">FastAPI</p>
                </div>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                  <SiDjango className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">Django</p>
                </div>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-blue-700 hover:scale-110 transition duration-300 ease-in-out">
                  <SiPostgresql className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">PostgreSQL</p>
                </div>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-gray-700 hover:scale-110 transition duration-300 ease-in-out">
                  <SiGnubash className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">Bash</p>
                </div>
                <div
                  className="rounded-full flex flex-col justify-center items-center shadow-lg hover:text-blue-600 hover:scale-110 transition duration-300 ease-in-out">
                  <SiVisualstudiocode className="text-gray-500 text-6xl" />
                  <p className="text-gray-500 text-sm mt-2">VS Code</p>
                </div>
              </div>
            </div>
            <div className="mb-0">
            <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 18.5204, lng: 73.8567, text: 'Pune, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Pune, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">markjvaz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
