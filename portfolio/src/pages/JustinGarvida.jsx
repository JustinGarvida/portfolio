import React from "react";
import JustinImage from "../images/justin.png";

const JustinGarvida = () => {
  return (
    <section
      id="justin-garvida"
      className="h-screen w-full flex justify-center items-center"
    >
      <div className="flex flex-col sm:flex-row items-center gap-10">
        {/* Larger Circular Image */}
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl">
          <img
            src={JustinImage}
            alt="Justin Garvida"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left text-yellow-500">
          <h1 className="text-7xl sm:text-8xl font-extrabold leading-tight">
            Justin Garvida
          </h1>
          <h2 className="text-4xl sm:text-5xl mt-4">
            Software Developer @ Susquehanna
          </h2>
        </div>
      </div>
    </section>
  );
};

export default JustinGarvida;

