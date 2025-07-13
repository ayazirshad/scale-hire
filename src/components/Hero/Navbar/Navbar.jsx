import React from "react";
import logo from "../../../assets/Hero/Frame 1000002711-copy.png";
import { RiMenu3Fill } from "react-icons/ri";
// import "./Navbar.css";

const Navbar = () => {
  const list = [
    { title: "How to", link: "howTo" },
    { title: "Why ScaleHire", link: "whyScaleHire" },
    { title: "Reviews", link: "reviews" },
    { title: "FAQ", link: "faq" },
  ];

  return (
    <nav className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-6 lg:py-9 w-full text-[#FFFFFF]">
      <div>
        <a href="/">
          <img src={logo} alt="scaleHire" />
        </a>
      </div>
      <div className="md:hidden">
        <RiMenu3Fill size={25} />
      </div>
      <ul className="gap-12 hidden md:flex">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item.link ? item.link : ""}`}> {item.title}</a>
            </li>
          );
        })}
      </ul>
      <div
        className="p-[0.7px] rounded-md bg-linear-to-br from-[#EFB762]/50 via-[#333333] to-[#FFFFFF]/30 backdrop-blur-lg hidden md:block
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
