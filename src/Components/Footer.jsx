import React from "react";
import elandlogo from "../assets/images/elandlogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={elandlogo}
              alt="eland logo"
              className="h-10 w-auto object-cover object-center "
            ></img>
            <h4 className="text-xl font-bold">Eland Advocate</h4>
            <p>
              1st Floor, Suite No. 183, Cham Towers <br /> Plot 12 Kampala Road
              P.O. Box 71948, Kampala <br />
              Tel. No: 0414 660628 <br />
              www.elandadvocates.com
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  PRATICEAREAS
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  OUR VALUE
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  MAKE APPOINTMENT
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:underline hover:text-red-900 hover:text-2xl"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <p>Email: @elandadvocates</p>
            <p>Phone: (256) 456-7890</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:underline">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-8">
        <p className="text-center py-4">
          Copyright © 2024 Eland Advocates / View our usage policy <br />{" "}
          Designed by Vivan Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
