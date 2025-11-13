import React from "react";
import img from "../assets/images/logo-light.png"
import img1 from "../assets/images/footer-img1.png"
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-gray-300 py-40 px-8 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 leading-8">
        <div>
          <div className="mb-8">
            <Link>
              <img src={img} className="h-6 " />
            </Link>
          </div>
          <div className="w-30 h-30 mb-4 overflow-hidden rounded-full">
            <img
              src={img1}
              alt="footer logo"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed w-40">
            Architecture is both the process and the product of planning,
            designing...
          </p>
        </div>

        {/* Column 2 - Latest Posts */}
        <div>
          <h2 className="text-white uppercase text-sm font-semibold mb-8">
            Latest Post
          </h2>
          <ul className="space-y-6 w-60 ">
            <li>
              <p className="hover:text-white cursor-pointer text-sm">
                The Most Spectacular House in Los Angeles
              </p>
              <Link>
                <span className="text-xs text-gray-500">04.01.2017</span>
              </Link>
            </li>
            <li>
              <p className="hover:text-white cursor-pointer text-sm">
                Tricks of the Trade: Architectural Guardrails
              </p>
              <Link>
                <span className="text-xs text-gray-500">04.01.2017</span>
              </Link>
            </li>
            <li>
              <p className="hover:text-white cursor-pointer text-sm">
                Interview with the Tom Stoppard
              </p>
              <Link>
                <span className="text-xs text-gray-500">04.01.2017</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Latest Tweets */}
        <div>
          <h2 className="text-white uppercase text-sm font-semibold mb-8">
            Latest Tweets
          </h2>
          <p className="text-sm text-gray-500">Couldn't connect with Twitter</p>
        </div>

        {/* Column 4 - Join the Club */}
        <div className="w-60">
          <h2 className="text-white uppercase text-sm font-semibold mb-8">
            Join the Club
          </h2>

          <div className="flex mb-10 py-2 ">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white text-black text-sm px-3 py-2 w-[140px] focus:outline-none"
            />
            <button className="bg-[#414141] text-white px-4 py-2 text-sm font-semibold">
              GO
            </button>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed w-30 mb-4">
            Architecture is both the process and the product of planning,
            designing...
          </p>

          <div className="flex space-x-4 mt-6 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaDribbble className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
