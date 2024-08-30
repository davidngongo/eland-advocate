import React from "react";

const Aboutus = () => {
  return (
    <section id="about-us" className="py-20 mb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl text-Maroon   sm:text-5xl md:text-6xl">
            ABOUT US
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 p-4">
            <p className="text-xl text-black sm:text-2xl leading-relaxed">
              Eland Advocates is a professional legal space with an unhindered
              focus on client needs. We believe that great teams and legal minds
              are tools for clients, so we have built our practice around being
              on the client’s agenda. Our business, in short, is the
              effectiveness of our clients. <br></br>Eland Advocates provides
              the highest quality legal advice and representation to its
              clients, which is why our ambitions stand up to our reputation.
              Eland Advocates enjoys top-tier positions in each of its core
              practice areas; the results we achieve set us apart, making us a
              model for the modern practice of law.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-xl text-black sm:text-2xl leading-relaxed">
              Eland Advocates is designed to operate by forming a collaborative
              response to legal issues. This harnessing of talented individual
              legal minds, working together, allows them to flourish and achieve
              great things for the client. We employ imaginative and independent
              thinking, which births diverse viewpoints, so that we can draw on
              a constant stream of new ideas to solve the toughest legal issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
