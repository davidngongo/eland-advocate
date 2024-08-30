import React from "react";
import { NavLink } from "react-router-dom";

const Vieuxallservice = () => {
  return (
    <section class="m-auto  max-w-lg my-10 px-6">
      <NavLink
        to="/Praticearea"
        className="block bg-black text-white text-xl text-center py-4 px-6 rounded-xl  hover:bg-Maroon"
      >
        VIEUX ALL PRACTICE AREAS
      </NavLink>
    </section>
  );
};

export default Vieuxallservice;
