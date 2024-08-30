import { useState } from "react";
import React from "react";
import Service from "../Service.json";
import Praticearea from "./Praticearea";
import Vieuxallservice from "./Vieuxallservice";
const Praticeareas = ({ isHome = false }) => {
  // const recentservice = Service.slice(0, 6);
  const Praticeareas = isHome ? Service.slice(0, 6) : Service;
  return (
    <>
      <section className="bg-white">
        <h2 className="text-2xl mt-20  text-Maroon mb-6 text-center sm:text-5xl md:text-6xl">
          OUR PRACTICE AREAS
        </h2>
      </section>
      {/* // <!-- Our service --> */}

      <section className=" bg-Maroon text-white px-4 py-10">
        <div className="container-xl bg-maroon lg:container m-auto">
          {/* <!-- pratice area  1 --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Praticeareas.map((Service) => (
              <Praticearea key={Service.id} Service={Service} />
            ))}
          </div>
        </div>
      </section>
      <Vieuxallservice />
    </>
  );
};

export default Praticeareas;
