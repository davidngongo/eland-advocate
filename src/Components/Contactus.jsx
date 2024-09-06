import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function to handle

  const handleSubmit = (e) => {
    e.preventDefault();

    // the emailjs service Id, template id, and public key

    const serviceid = "service_5lvmgbj";
    const templateid = "template_4ye3teh";
    const publickey = "T_Vdra0ouyrO7-ugD";

    // create a new object that contains dynamci template params

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "You should check Out this!!! another appointment",
      message: message,
    };

    // send the email using emailjs

    emailjs
      .send(serviceid, templateid, templateParams, publickey)
      .then((response) => {
        console.log("Email sent succefully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error while sending email:", error);
      });
  };

  return (
    <section className="bg-white py-10 px-4 ">
      <div className="max-w-11xl mx-auto bg-white p-8  shadow-md">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className=" border-2 border-Maroongit">
            <h2 className="text-2xl font-bold p-3 text-start mb-1">
              Contact Us
            </h2>
            <div className="flex flex-wrap -mx-2 py-10 px-4 ">
              <div className="w-full md:w-1/2 px-2  ">
                <div className="mb-4 flex ">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    <b>Name </b>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-3 py-2 border border-black border-1  shadow-sm focus:outline-none focus:ring-red-900 focus:border-red-900 ml-3 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-4 flex">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    <b>Email </b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-3 py-2 border border-black border-1  shadow-sm focus:outline-none focus:ring-red-900 focus:border-red-900 ml-3 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 px-2  flex">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-1 ml-1 mr-2"
                >
                  <b>Message </b>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="block w-full px-3 py-2 border border-black border-1  shadow-sm focus:outline-none focus:ring-Maroon focus:border-black  sm:text-sm"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 ">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-Maroon text-white font-semibold py-2 px-4  shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
