import React from "react";
import teamm from "../Teamm.json";

const Ourteam = () => {
  return (
    <section
      id="team"
      className="bg-white border-1 border-black mt-10 mb-2 py-20 "
    >
      <div className="container  mx-auto">
        <h1 className="text-2xl text-Maroon text-center mb-8    sm:text-5xl md:text-6xl">
          OUR TEAM
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-1">
          {teamm.map((Teamm) => (
            <div
              key={Teamm.id}
              teamm={Teamm}
              className="p-8 flex flex-col items-center   sm:justify-start sm:items-start text-black"
            >
              <img
                className="w-[100%] h-[85%] object-cover object-center  "
                src={Teamm.img}
                alt={Teamm.role}
              />

              <div className="  ">
                <h2 className="text-xl text-Maroon mt-4 font-semibold">
                  {Teamm.name}
                </h2>
                <p className=" ">
                  <b>{Teamm.role}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
