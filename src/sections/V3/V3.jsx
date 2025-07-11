import React from "react";
import Card1 from "../../components/V3/Card1/Card1";
import Card3 from "../../components/V3/Card3/Card3";
import Card2 from "../../components/V3/Card2/Card2";

const V3 = () => {
  return (
    <div className="bg-[#FFFFFF] py-20 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-[#161514] text-4xl">How it Works</h2>
      <div className="w-[1104px] mt-5 flex flex-col gap-6">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default V3;
