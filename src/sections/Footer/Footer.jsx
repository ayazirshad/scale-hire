import React from "react";
import footerLogo from "../../assets/Footer/footerLogo.png";

const Footer = () => {
  const pages = [
    { title: "How it works", link: "/how-it-works.html" },
    { title: "Why SorsX", link: "/why-sorsx.html" },
    { title: "Reviews", link: "/reviews.html" },
    { title: "FAQ", link: "/faq.html" },
    { title: "Blog", link: "/blog.html" },
    { title: "Terms & conditions", link: "/terms-and-conditions.html" },
    { title: "Privacy Policy", link: "/privacy-policy.html" },
    { title: "Become a Partner", link: "/become-a-partner.html" },
    { title: "Twitter", link: "https://twitter.com" },
    { title: "Facebook", link: "https://facebook.com" },
    { title: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <div className="text-[#FFFFFF] px-5 md:px-10 lg:px-20 py-20 pb-10 ">
      {/* logo  */}
      <div className="sm:flex justify-between">
        <h1 className="text-[35px] md:text-[47px] lg:text-[60px] max-w-[600px]">
          Have questions? Schedule a call today.
        </h1>
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)] mt-7 w-max">
            <a href="/">
              <button className="bg-[#254CF8] px-6 py-3 w-[149px] rounded-lg shadow-[inset_0_7px_9.3px_rgba(205,205,205,0.2)] hover:cursor-pointer">
                Start Today
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* line  */}
      <div className="w-full mt-20 bg-[#404040] h-[1px]"></div>

      {/* logo & links  */}
      <div className="mt-20 mb-28 sm:flex sm:gap-5 justify-between">
        <div className="w-32 md:w-[161px]">
          <img src={footerLogo} alt="sorsX" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 lg:gap-x-28 gap-y-5 mt-10 sm:mt-0">
          {pages.map((item, index) => {
            return (
              <a href={item.link} key={index} className="w-max">
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      {/* license */}
      <div className="flex justify-between text-[#8A8A89] text-[13.5px] flex-wrap gap-4">
        <p>&copy;2025 SorsX. All rights reserved</p>
        <p>
          101 Marlow Street. #12-05 Clife Parkview. Singapore 059020.
          <a href="/"> View on Maps</a>
        </p>
        <p> Cookies Policy | Map</p>
      </div>
    </div>
  );
};

export default Footer;
