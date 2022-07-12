import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const SectionTwo = () => {
  return (
    <>
      <section id="section-two" className="w-full ">
        <div className="between"></div>
        <div className="mainComponent">
          <div className="w-full h-full px-20 py-16 bg-pro-gray">
            <h1 className="mainHeading">My skills</h1>
            <h6 className="my-6 font-bold text-2xl text-pro-blue">
              These are the main technologies I use to realise most of my
              projects.
            </h6>
            <div className="grid grid-cols-3 gap-12 my-14 text-2xl font-bold">
              <div className="skills">
                {" "}
                <AiFillHtml5 className="text-gray-600 text-5xl" />{" "}
                <span>HTML</span>
              </div>
              <div className="skills">
                {" "}
                <SiCss3 className="text-gray-600 text-4xl" />
                <span>CSS/Sass</span>
              </div>
              <div className="skills">
                {" "}
                <SiJavascript className="text-gray-600 text-4xl" />
                <span>JavaScript</span>
              </div>
              <div className="skills">
                <FaReact className="text-gray-600 text-4xl" />
                <span>React.Js</span>
              </div>
              <div className="skills">
                <SiRedux className="text-gray-600 text-4xl" />
                <span>Redux</span>
              </div>
              <div className="skills">
                {" "}
                <SiNextdotjs className="text-gray-600 text-4xl" />
                <span>Next.Js</span>
              </div>
              <div className="skills">
                <SiFirebase className="text-gray-600 text-4xl" />
                <span>Firebase</span>
              </div>
              <div className="skills">
                <SiMaterialui className="text-gray-600 text-4xl" />
                <span>MaterialUI</span>
              </div>
              <div className="skills">
                <SiTailwindcss className="text-gray-600 text-4xl" />
                <span>TailwindCss</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
