import React, { useState } from "react";
import elandlogo from "../assets/images/elandlogo.png";
import valueData from "../Value.json";

const Ourvalues = () => {
  const [expandedValueId, setExpandedValueId] = useState(null);

  const toggleDescription = (id) => {
    setExpandedValueId(expandedValueId === id ? null : id);
  };

  const cardStyles =
    "bg-white text-xl text-black rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-Maroon hover:text-white transition-shadow duration-300";

  return (
    <section className="px-4 py-10">
      <div className="container m-auto lg:container-xl">
        <h2 className="text-2xl  text-Maroon mb-6 text-center sm:text-5xl md:text-6xl">
          OUR VALUES
        </h2>
        <p className="text-center mb-9 p-9 text-xl text-black sm:text-2xl leading-relaxed">
          Eland Advocates aspires to always be brutally real, practically
          honest, and always professional.
          <br />
          It is impossible to be those things when you are out of touch with
          your context. This is why our values
          <br />
          anchor us on principles that are simple yet reinforce the idea that
          the client is the job we are required to do.
          <br /> We exist to be brilliant for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueData.map((value) => {
            const isExpanded = expandedValueId === value.id;
            const description = isExpanded
              ? value.description
              : `${value.description.substring(0, 200)} ...`;

            return (
              <div key={value.id} className={cardStyles}>
                <div className="flex flex-col mb-6">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={value.icon}
                    alt="Eland Logo"
                  />
                  <h3 className="text-xl mt-5 text-black font-bold ">
                    {value.name}
                  </h3>
                </div>
                <p className="text-maroon mb-4 ">{description}</p>
                <button
                  className=""
                  onClick={() => toggleDescription(value.id)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
