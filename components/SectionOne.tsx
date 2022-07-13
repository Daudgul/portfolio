import Image from "next/image";
import React from "react";
import Pic from "../public/imgs/pic-1.png";
import { Link } from "react-scroll";

const SectionOne = () => {
  return (
    <>
      <section
        id="section-one"
        className="w-full max-w-6xl mx-auto bg-pro-blue flex justify-center items-center lg:p-16"
      >
        <div className="  px-4 lg:rounded  bg-white">
          <header className="flex justify-between p-4 ">
            <h1 className=" font-fuemen text-xl md:text-4xl font-extrabold tracking-widest">
              {" "}
              DAUD
            </h1>
            <ul className="flex space-x-4 sm:space-x-14 items-center">
              <li className="navItem">
                <Link
                  to="section-two"
                  smooth={true}
                  spy={true}
                  offset={120}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="navItem">
                <Link
                  to="section-three"
                  smooth={true}
                  spy={true}
                  offset={100}
                  duration={600}
                >
                  Projects
                </Link>
              </li>
              <li className="navItem">
                <Link
                  to="section-four"
                  smooth={true}
                  spy={true}
                  offset={100}
                  duration={700}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </header>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-0 md:px-4 pb-6 rounded-sm">
            <div className="w-full  bg-pro-gray flex flex-col items-start pl-3 lg:pl-6 lg:pr-2 justify-center space-y-5 py-4 relative">
              <div className="xBox top-[12px] md:top-5 md:-ml-[14px] -ml-[5px]"></div>
              <div className="yBox -top-3"></div>
              <h3 className=" text-xl lg:text-3xl text-gray-600 font-semibold">
                Hello!
              </h3>

              <h1 className=" text-3xl  lg:text-5xl  font-extrabold z-30">
                I'm M. Daud Gul
              </h1>
              <div className="lg:w-[73%] w-[46%] lg:ml-[96px] ml-[60px] h-4 -translate-y-10 z-0 bg-gray-600">
                {""}
              </div>
              <h2 className="text-xl lg:text-3xl font-bold -translate-y-10 ">
                A Front-end developper
              </h2>

              <Link
                to="section-four"
                smooth={true}
                spy={true}
                offset={100}
                duration={700}
              >
                <button className="btn sm:translate-y-0  -translate-y-10">
                  Hire me
                </button>
              </Link>

              <div className="xBox bottom-3 right-7 md:bottom-5 md:right-5"></div>
              <div className="yBox bottom-2 right-8"></div>
            </div>
            <div className="w-full -mb-[6px]">
              <Image width={400} height={400} src={Pic} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
