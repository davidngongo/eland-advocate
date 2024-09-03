import React from "react";

const Contactus = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-11xl mx-auto bg-white p-8 border-2 border-Maroon shadow-md">
        <h2 className="text-2xl font-bold text-start mb-3">Contact Us</h2>
        <form className="space-y-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mt-3">
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
                rows="4"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Maroon focus:border-Maroon sm:text-sm"
                required
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center mt-6">
        <button
          type="submit"
          className="w-full md:w-1/3 bg-Maroon text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-200"
        >
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contactus;
