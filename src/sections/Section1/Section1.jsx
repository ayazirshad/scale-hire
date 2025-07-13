import React from "react";
import Tvector from "../../assets/Section1/Tvector.png";
import gearVector from "../../assets/Section1/gear.png";
import listVector from "../../assets/Section1/Icon.png";

const Section1 = () => {
  const cards = [
    {
      vector: Tvector,
      title: "Not just another text filter",
      description:
        "We interview candidates with AI video interviews for deeper screening",
    },
    {
      vector: gearVector,
      title: "100% Automated",
      description:
        "We handle outreach, interviews and candidate rankings for you.",
    },
    {
      vector: listVector,
      title: "All you do is hire",
      description:
        "Instead of hours of calls and interviews, simply pick your top candidates and hire",
    },
  ];
  return (
    <div
      className="bg-[#161514] grid place-items-center mt-[360px] sm:mt-[440px] md:mt-[530px] relative text-[#FFFFFF] w-full px-5"
      id="whyScaleHire"
    >
      <div className="bg-[#161514] h-20 w-full blur-sm sm:blur-md md:blur-lg absolute -top-10"></div>
      <h2 className="mt-20 text-3xl md:text-4xl text-center">
        Why SorsX Scale Hire is Different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1104px] mt-16 mb-20">
        {cards.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-white/10 backdrop-blur-2xl rounded-2xl px-5 py-16 border border-gray-600/50"
              key={index}
            >
              <div className="h-[60px] object-contain flex justify-center items-center">
                <img src={item.vector} alt="textVector" className="h-full" />
              </div>
              <h3 className="tracking-tight text-center text-2xl mt-10">
                {item.title}
              </h3>
              <p className="text-center text-[#CCCFD7] mt-2 mx-10">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
