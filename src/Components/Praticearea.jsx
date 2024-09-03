import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Praticearea = ({ Service }) => {
  const [showfulldescription, setshowfulldescription] = useState(false);
  let description = Service.description;

  if (!showfulldescription) {
    description = description.substring(0, 230) + " ...";
  }
  return (
    <div className=" ">
      <div className="p-4">
        <div className="mb-3">
          <img
            src={Service.image}
            alt={Service.title}
            className="w-full h-48 object-cover "
          />
          <h3 className="text-xl mt-3 text-white leading-relaxed font-bold">
            {Service.title}
          </h3>
        </div>

        <div className=" mb-5">{description}</div>

        {/* <div className="border border-gray-100 mb-5"></div> */}

        <div className=" flex-col lg:flex-row justify-between mb-4">
          <NavLink
            to={Service.link}
            className="h-[36px] bg-black hover:bg-maroon text-white px-4 py-2  text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Praticearea;
