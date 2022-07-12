import Image from "next/image";
import React from "react";
import Pic from "../public/imgs/pic-1.png";
import { Link } from "react-scroll";

const SectionOne = () => {
  return (
    <>
      <section
        id="section-one"
        className="w-full bg-pro-blue flex justify-center items-center py-16 px-16 "
      >
        <div className="  px-4 rounded  bg-white">
          <header className="flex justify-between p-4 ">
            <h1 className=" font-fuemen text-4xl font-bold tracking-widest">
              {" "}
              DAUD
            </h1>
            <ul className="flex space-x-14 items-center">
              <li className="navItem">
                <Link
                  to="section-two"
                  smooth={true}
                  spy={true}
                  offset={100}
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
          <div className="flex px-4 pb-6 rounded-sm">
            <div className="w-[550px] bg-pro-gray flex flex-col items-start pl-6 justify-center space-y-5 relative">
              <div className="xBox top-5 -ml-[14px]"></div>
              <div className="yBox -top-3"></div>
              <h3 className="text-3xl text-gray-600 font-semibold">Hello!</h3>

              <h1 className="text-5xl font-extrabold z-30">I'm M. Daud Gul</h1>
              <div className="w-[53%] ml-[96px] h-4 -translate-y-10 z-0 bg-gray-600">
                {""}
              </div>
              <h2 className="text-3xl font-bold -translate-y-10 ">
                A Front-end developper
              </h2>

              <div className="flex space-x-9 ">
                <Link
                  to="section-four"
                  smooth={true}
                  spy={true}
                  offset={100}
                  duration={700}
                >
                  <button className="btn">Hire me</button>
                </Link>
                {/* <button className="btn">See portfolio</button> */}
              </div>
              <div className="xBox bottom-5 right-5"></div>
              <div className="yBox bottom-2 right-8"></div>
            </div>
            <div className="w-[550px] -mb-[6px]">
              <Image width={800} height={800} src={Pic} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
