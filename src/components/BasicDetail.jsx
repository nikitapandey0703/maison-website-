import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter, TiSocialPinterest } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const BasicDetail = () => {
  return (
    <div className="w-full bg-[#181818] text-[#cccccc] text-[11px] h-11 flex items-center justify-between px-6 md:px-20 lg:px-32">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3 font-semibold">
        <Link
          to="/our-services"
          className="hover:text-white transition-all duration-300"
        >
          FAQ
        </Link>

        <span className="text-[#ffffff4a]">|</span>

        <Link
          to="/contact"
          className="hover:text-white transition-all duration-300"
        >
          CONTACT
        </Link>

        <span className="hidden md:block hover:text-white transition-all duration-300">
          + 80 85 73 31 15
        </span>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        <span className="hidden md:block font-bold">
          MON-FRI : 07:00AM - 5:00PM
        </span>

        <span className="hidden md:block font-bold">
          EN <span className="text-[#ffffff4a] px-1">|</span> FR
        </span>

        <span className="font-bold">FOLLOW</span>

        {/* SOCIAL ICONS */}
        <div className="flex gap-2 text-[14px]">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <RiFacebookFill />
          </a>

          <a
            href="https://x.com/home"
            target="_blank"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <TiSocialTwitter />
          </a>

          <a
            href="https://in.pinterest.com/"
            target="_blank"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <TiSocialPinterest />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicDetail;
