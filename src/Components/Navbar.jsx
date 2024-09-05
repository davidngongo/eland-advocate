import React, { useState } from "react";
import elandlogo from "../assets/images/elandlogo.png";
import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const Linkclass = ({ isActive }) =>
    isActive
      ? "text-white bg-Maroon hover:bg-black hover:text-white rounded-md px-3 py-2"
      : "text-maroon hover:bg-Maroon hover:text-white rounded-md px-3 py-2";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-white z-20 w-full border-b border-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center  md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-30 w-40" src={elandlogo} alt="Eland logo" />
              {/* <span className="hidden md:block text-black text-2xl font-bold ml-2">
                Eland Advocate
              </span> */}
            </NavLink>
          </div>

          {/* Button to open/close the menu on small screens */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white bg-black rounded-md hover:bg-Maroon focus:outline-none"
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isOpen ? (
                // X (close) icon
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger menu icon
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
              )}
            </button>
          </div>

          {/* Navbar links for large screens */}
          <div className="hidden md:flex  md:space-x-2">
            <NavLink to="/" className={Linkclass}>
              Home
            </NavLink>
            {/* <HashLink smooth to="/about#about-us" className={Linkclass}>
              ABOUT US
            </HashLink> */}
            <NavLink to="/about" className={Linkclass}>
              About us
            </NavLink>
            <NavLink to="/Praticearea" className={Linkclass}>
              Practical areas
            </NavLink>
            <NavLink smooth to="/team" className={Linkclass}>
              Our team
            </NavLink>
            <NavLink to="/contactus" className={Linkclass}>
              Contact us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Overlay and menu for small devices */}
      <div
        className={`fixed inset-0 bg-black mt-20 h-[100%] w-[100%] bg-opacity-100 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex md:w-1/2 w-70 h-70 text-white flex-col space-y-4 p-4 mt-20">
          <NavLink
            to="/"
            className={Linkclass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={Linkclass}
            onClick={() => setIsOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="/Praticearea"
            className={Linkclass}
            onClick={() => setIsOpen(false)}
          >
            Practical areas
          </NavLink>
          <NavLink
            to="/team"
            className={Linkclass}
            onClick={() => setIsOpen(false)}
          >
            Our team
          </NavLink>
          <NavLink
            to="/contactus"
            className={Linkclass}
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
