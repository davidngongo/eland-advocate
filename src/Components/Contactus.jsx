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
    const publickey = "0yikcLdWiKyfbGH8T";

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
        <h2 className="text-2xl font-bold text-start mb-3">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-wrap -mx-2 py-10 px-4 border-2 border-Maroon">
            <div className="w-full md:w-1/2 px-2 mt-3 ">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <b>Name:</b>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-900 focus:border-red-900 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <b>Email:</b>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-900 focus:border-red-900 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2 mt-3">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <b>Message:</b>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Maroon focus:border-Maroon sm:text-sm"
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-Maroon text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-200"
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
