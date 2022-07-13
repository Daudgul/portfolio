import React from "react";

const SectionFour = () => {
  return (
    <>
      <section id="section-four" className="w-full mb-16 ">
        <div className="  mainComponent sm:p-10">
          <div className="bg-pro-gray w-full h-full sm:px-16 sm:py-10 p-4">
            <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 w-full h-full  overflow-hidden">
              <div className="w-full flex flex-col justify-between">
                <h1 className="mainHeading">More About me</h1>
                <div>
                  <h3 className=" text-sm lg:text-lg font-bold mt-6 mb-8 mr-8">
                    I have been on Web Fields Like 2 Years. I Have Skills in
                    JavaScript, React.js, Redux, Next.js, HTML and CSS, Sass,
                    MatirialUI, Tailwind.css, Firebase And Still Learning New
                    Things. I am a fast Learner and my aim is to become a
                    Professional Full Stack Website Developer. So far i Work
                    with my Friends and Doing Remote Job. Yes i am willing to do
                    work Remotley and Open for any Position.
                  </h3>
                  <button className="btn">download resume</button>
                </div>
              </div>
              <div className="w-full bg-pro-blue rounded-md text-white flex justify-between flex-col">
                <h1 className=" text-2xl lg:text-4xl mt-1 font-extrabold text-center">
                  Contact Details
                </h1>
                <div className="px-16 pb-6 font-semibold">
                  <h5 className="conDtl">Name</h5>
                  <p className="sm:ml-20">={">"} : Mohammad Daud Gul</p>
                  <h5 className="conDtl">Number </h5>
                  <p className="sm:ml-20">={">"} :+91-9012261447</p>
                  <h5 className="conDtl">Email</h5>
                  <p className="sm:ml-20">={">"} : mohd.daudgul@gmail.com</p>
                  <h5 className="conDtl">Address</h5>
                  <p className="sm:ml-20">
                    ={">"} : Vidhiya House, Gujar Tola{" "}
                  </p>
                  <p className="sm:ml-28">Rampur, Uttar Pradesh</p>
                  <p className="sm:ml-28">Pin 244901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
