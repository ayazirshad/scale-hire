import React from "react";
import logo from "../../../assets/Hero/Frame 1000002711-copy.png";
// import "./Navbar.css";

const Navbar = () => {
  const list = ["How to", "Why ScaleHire", "Reviews", "FAQ"];
  return (
    <nav className="flex justify-between items-center px-16 py-9 w-full bg-[#161514] text-white">
      <div>
        <a href="/">
          <img src={logo} alt="scaleHire" />
        </a>
      </div>
      <ul className="flex gap-12">
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div
        className="p-[0.7px] rounded-md bg-linear-to-br from-[#EFB762]/50 via-[#333333] to-[#FFFFFF]/30 backdrop-blur-lg
      "
      >
        <button className="py-[6px] px-6 rounded-md bg-linear-to-br from-[#4a4a4a] to-[#121212] hover:cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
