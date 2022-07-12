import Link from "next/link";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { MdOutlineMobileFriendly } from "react-icons/md";

const SectionThree = () => {
  return (
    <section id="section-three" className="w-full">
      <div className="between"></div>
      <div className="mainComponent">
        <div className="bg-pro-gray pt-10 px-14 h-[40vh]">
          <h1 className="mainHeading">Projects </h1>
        </div>
        <div className="pb-20 px-16">
          <div className="card">
            <Link href="https://shopping-web-one.vercel.app/">
              <div className="subCard">
                <div className="gitIcon ">
                  <AiOutlineGithub />
                  <BsLaptop />
                </div>
                <h1 className="text-3xl font-bold text-start px-8 leading-[45px]">
                  Hekto Shopping app{" "}
                </h1>
                <h6 className=" text-gray-600font-semibold">
                  Next.Js - MUI - Firebase
                </h6>
              </div>
            </Link>
            <Link href="https://clone-12b4c.web.app/#yourID">
              <div className="subCard">
                <div className="gitIcon ">
                  <AiOutlineGithub />
                  <BsLaptop />
                </div>
                <h1 className="text-3xl leading-[45px] font-bold text-start px-8">
                  Amazone Clone
                </h1>
                <h6 className=" text-gray-600font-semibold">
                  React.Js - Firebase
                </h6>
              </div>
            </Link>
            <Link href="https://netflix-clone-neon-nine.vercel.app/login">
              <div className="subCard">
                <div className="gitIcon ">
                  <AiOutlineGithub />
                  <BsLaptop />
                  <MdOutlineMobileFriendly />
                </div>
                <h1 className="text-3xl leading-[45px] font-bold text-start px-8">
                  Netflix Clone
                </h1>
                <h6 className=" text-gray-600font-semibold">
                  Next.Js - Tailwind-CSS
                </h6>{" "}
              </div>
            </Link>
            <Link href="https://task-management-app-eight.vercel.app/">
              <div className="subCard">
                <div className="gitIcon ">
                  <AiOutlineGithub />
                  <BsLaptop />
                  <MdOutlineMobileFriendly />
                </div>
                <h1 className="text-3xl leading-[45px] font-bold text-start px-8">
                  To-Do List app{" "}
                </h1>
                <h6 className=" text-gray-600font-semibold">React.Js - MUI</h6>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="between"></div>
    </section>
  );
};

export default SectionThree;
