import React from "react";
import Manually from "../../components/V3/Manually/Manually";
import Automated from "../../components/V3/Automated/Automated";
import ReadyToHire from "../../components/V3/ReadyToHire/ReadyToHire";

const V3 = () => {
  return (
    <div
      className="bg-[#FFFFFF] py-20 flex flex-col justify-center items-center px-5"
      id="howTo"
    >
      <h2 className="font-semibold text-[#161514] text-4xl">How it Works</h2>
      <div className="max-w-[1104px] mt-7 flex flex-col gap-6">
        <Manually />
        <Automated />
        <ReadyToHire />
      </div>
    </div>
  );
};

export default V3;
