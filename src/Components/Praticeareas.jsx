import { useState } from "react";
import React from "react";
import Service from "../Service.json";
import Praticearea from "./Praticearea";
const Praticeareas = () => {
  const recentservice = Service.slice(0, 6);
  return (
    <>
      <section className="bg-white">
        <h2 className="text-2xl mt-20  text-red-900 mb-6 text-center sm:text-5xl md:text-6xl">
          OUR PRACTICE AREAS
        </h2>
      </section>
      {/* // <!-- Our service --> */}

      <section className=" bg-red-900 text-white px-4 py-10">
        <div className="container-xl bg-maroon lg:container m-auto">
          {/* <!-- pratice area  1 --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentservice.map((Service) => (
              <Praticearea key={Service.id} Service={Service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Praticeareas;
