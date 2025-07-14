import React, { useState } from "react";
import logo from "../../../assets/Hero/Frame 1000002711-copy.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
// import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const list = [
    { title: "How to", link: "howTo" },
    { title: "Why ScaleHire", link: "whyScaleHire" },
    { title: "Reviews", link: "reviews" },
    { title: "FAQ", link: "faq" },
  ];

  return (
    <nav className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-6 lg:py-9 w-full text-[#FFFFFF] relative transition-all duration-300">
      <div className="h-10 sm:h-[44px]">
        <a href="/">
          <img src={logo} alt="scaleHire" className="h-full" />
        </a>
      </div>
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <RiMenu3Fill size={25} />
      </div>
      <div
        className={`fixed top-0 ${
          isMenuOpen ? "left-0" : "-right-full"
        } bg-white/10 backdrop-blur-2xl z-40 w-full py-16 px-5 transition-all duration-300 md:hidden`}
      >
        <div className="text-right pr-6">
          <button
            className="p-2 hover:cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose size={26} />
          </button>
        </div>
        <div className="flex flex-col">
          {list.map((item, index) => {
            return (
              <a
                href={`#${item.link ? item.link : ""}`}
                onClick={() => setIsMenuOpen(false)}
                key={index}
                className="hover:scale-105 transition-all duration-300 hover:font-semibold border-b border-b-gray-400 mb-5 py-2 text-center"
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      <ul className="gap-12 hidden md:flex">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:scale-105 transition-all duration-300 hover:font-semibold"
            >
              <a href={`#${item.link ? item.link : ""}`}> {item.title}</a>
            </li>
          );
        })}
      </ul>
      <div
        className="p-[0.7px] rounded-md bg-linear-to-br from-[#EFB762]/50 via-[#333333] to-[#FFFFFF]/30 backdrop-blur-lg hidden md:block 
      "
      >
        <a href="/">
          <button className="py-[6px] px-6 rounded-md bg-linear-to-br from-[#4a4a4a] to-[#121212] hover:cursor-pointer hover:bg-linear-to-bl transition-all duration-300">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
