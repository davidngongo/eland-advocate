import React, { useState } from "react";
import elandlogo from "../assets/images/elandlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-white  w-full border-b border-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <img className="h-10 w-auto" src={elandlogo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Eland Advocate
              </span>
            </a>
          </div>

          {/* Button to open/close the menu on small screens */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white bg-black rounded-md hover:bg-red-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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
            </button>
          </div>

          {/* Navbar links for large screens */}
          <div className="hidden md:flex md:space-x-2">
            <a
              href="/index.html"
              className="text-white bg-black hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            >
              ABOUT US
            </a>
            <a
              href="/add-job.html"
              className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            >
              PRACTICAL AREAS
            </a>
            <a
              href="/add-job.html"
              className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            >
              OUR TEAM
            </a>
            <a
              href="/add-job.html"
              className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Overlay and menu for small devices */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-4 p-4 mt-20">
          <a
            href="/index.html"
            className="text-white bg-black text-xl  hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/jobs.html"
            className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </a>
          <a
            href="/add-job.html"
            className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            PRACTICAL AREAS
          </a>
          <a
            href="/add-job.html"
            className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            OUR TEAM
          </a>
          <a
            href="/add-job.html"
            className="text-maroon hover:bg-red-800 hover:text-white rounded-md px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
