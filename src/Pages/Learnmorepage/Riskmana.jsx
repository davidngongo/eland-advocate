import React from "react";

const Riskmana = () => {
  return (
    <section id="about-us" className="py-20 mb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-1xl text-black  text-maroon sm:text-2xl md:text-3xl">
            RISK MANAGEMENT
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 p-4">
            <p className="text-xl text-black mb-4">
              In these turbulent financial times it is imperative that companies
              manage risk in an efficient, effective and practical manner in
              order to protect their stakeholders from the downside risk
              associated with the current business climate.
            </p>
            <p className="text-xl text-black mb-4">
              We help our clients mitigate risk by developing and implementing
              robust risk and regulatory frameworks, integrate risk management
              practices within their day to day operations.
            </p>
            <p className="text-xl text-black mb-4">
              When you work with us, you benefit from our understanding of the
              rapidly evolving regulatory environment for risk management. Our
              goal is always to help you meet regulatory requirements and reduce
              risk to our client’s business while attaining set goals.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-xl text-black mb-4">
              Our local presence and understanding of the regions challenging
              but exciting business frontier enables us to guide our clients on
              how to approach and mitigate political, security and financial
              risks associated with doing business across the region. In that
              regard the firm also provides the following services:
            </p>
            <ul className="text-Maroon text-xl ml-4 mb-4 list-disc">
              <li>Corporate investigations</li>
              <li>
                Legal due diligence support on all aspects from assets property
                to professional services etc.
              </li>
              <li>Anti-money laundering</li>
              <li>Regulatory and compliance risk</li>
              <li>Credit risk</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Riskmana;
