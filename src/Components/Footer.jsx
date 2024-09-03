import React from "react";
import elandlogodd from "../assets/images/elandlogodd.png";
import { NavLink } from "react-router-dom";
import FB from "../assets/images/FB.png";
import X from "../assets/images/X.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={elandlogodd}
              alt="eland logo"
              className="h-40 w-auto object-cover object-center "
            ></img>
            {/* <h4 className="text-xl font-bold">Eland Advocate</h4> */}
            <p>
              1st Floor, Suite No. 183, Cham Towers <br /> Plot 12 Kampala Road
              P.O. Box 71948, Kampala <br />
              Tel. No: 0414 660628 <br />
              www.elandadvocates.com
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 mt-3">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <div className="flex space-x-8 ">
              <div className="">
                <ul className="space-y-2 ">
                  <li>
                    <NavLink
                      to="/about"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      Our team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contactUS"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      Contact us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li>
                    <NavLink
                      to="/Praticearea"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      Pratical areas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contactus"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      Our value
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/makeappointement"
                      className="hover:underline hover:text-Maroon hover:text-1xl hover:ml-3"
                    >
                      Make appointment
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="space-y-2">
              <li>
                <NavLink
                  href="/privacy"
                  className="hover:underline hover:text-Maroon hover:text-1xl  hover:ml-3"
                >
                  Privacy and policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4  mt-3">
            <div className=" ">
              <div className="flex mb-1 ml-2  space-x-1">
                <a href="https://facebook.com" className="hover:underline">
                  <img
                    src={FB}
                    alt="Facebook "
                    className="h-30 w-20 object-cover object-center "
                  ></img>
                </a>
                <a href="https://twitter.com" className="hover:underline">
                  <img
                    src={X}
                    alt="Twitter"
                    className="h-30 w-20  object-cover object-center "
                  ></img>
                </a>
              </div>
              <div className="ml-4">
                <p ClassName=""> info@elandadvocates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-8">
        <p className="text-center py-4">
          Copyright © 2024 Eland Advocates /{" "}
          <a href="">View our usage policy</a> <br /> Designed by Vivan Media /{" "}
          <a href="https:Dng-entrepise.com" className="hover:text-blue-900">
            coded by Dng-entreprise
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
