import React, { useState } from "react";

import davng from "../assets/images/davng.png";

const Comtof = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="bg-red-900 w-full h-[60vh]  flex items-center justify-center">
        <img
          src={davng}
          alt="Your description"
          className="w-full h-full object-cover object-top "
        />
        {/* <div className="w-full h-full max-w-4x bg-maroon shadow-lg rounded-lg overflow-hidden">
        <img
          src={davng}
          alt="Your description"
          className="w-full h-full object-cover  "
        />
      </div> */}
        {/* <p
          className="absolute text-6xl text-white z-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          style={{ top: "35%", left: "15%", transform: "tranlate(-50%, -50%)" }}
        >
          Book an appoint today with us for anfortable journey
        </p> */}
      </div>
      <div>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="bg-Maroon text-white  text-1xl sm:text-1xl md:text-3xl lg:text-4xl font-bold  py-4 px-6 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-8 lg:px-9 rounded-lg shadow-md hover:bg-black hover:text-1xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 absolute z-[10] "
          style={{
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* <a href="">Make Appointment</a> */}
          <span> {isOpen ? "Close Appointment " : "Open  Appointment"} </span>

          {isOpen ? (
            <svg
              className="block h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Comtof;
