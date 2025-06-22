import React, { useState, useEffect } from "react";
import davng from "/assets/images/davng.jpg";

import emailjs from "@emailjs/browser";

const Comtof = () => {
  const [isOpen, setisOpen] = useState(false);

  const onShowClick = () => {
    setisOpen(!isOpen);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // for submiting the form to the emailjs

  // const of value in in the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  // function to handle now the process

  const handleSubmit = (e) => {
    e.preventDefault();

    // the emailjs service Id, template id, and public key

    const serviceid = "service_5lvmgbj";
    const templateid = "template_1yq8c7e";
    const publickey = "T_Vdra0ouyrO7-ugD";

    // create a new object that contains dynamci template params

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: " check Out this!!!  Appointment",
      message: message,
      date: date,
    };

    // send the email using emailjs

    emailjs
      .send(serviceid, templateid, templateParams, publickey)
      .then((response) => {
        console.log("Email sent succefully", response);
        setName("");
        setEmail("");
        setMessage("");
        setDate("");
      })
      .catch((error) => {
        console.log("Error while sending email:", error);
      });
  };

  return (
    <>
      <div className="bg-Maroon w-full h-[60vh] flex items-center justify-center">
        <img
          src={davng}
          alt="Your description"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div>
        <button
          onClick={onShowClick}
          className="bg-Maroon text-white text-1xl sm:text-1xl md:text-3xl lg:text-4xl font-bold py-4 px-6 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-8 lg:px-9 rounded-lg shadow-md hover:bg-black hover:text-1xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 absolute z-[10]"
          style={{
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Make Appointment
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg"
              tabIndex="-1"
            >
              <button
                onClick={onShowClick}
                className="float-right text-red-500 font-bold text-lg"
              >
                X
              </button>
              <h2 className="text-lg font-bold mb-4">
                Make An Appointment With Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name </label>
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-black p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-black p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Subject </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-black p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-Maroon text-white p-2 rounded w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comtof;
