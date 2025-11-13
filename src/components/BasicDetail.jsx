import React from 'react'
import { Link } from 'react-router-dom';
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const BasicDetail = () => {
  return (
    <div className="flex justify-between bg-[#181818] text-[#cccccc] h-11 text-[11px] items-center  ">
      <div className="flex gap-3 pl-22 font-semibold">
        <Link>FAQ</Link>
        <span className="text-[#ffffff4a]">|</span>
        <Link>CONTACT</Link>
        <span>+ 80 85 73 31 15</span>
      </div>

      <div className="flex gap-3 pr-22 text-[11px] ">
        <span className="px-4 font-bold">MON-FRI : 07:00AM - 5:00PM </span>
        <span className="px-4 font-bold">
          EN <span className="text-[#ffffff4a] px-1 "> | </span> FR
        </span>
        <span className="pl-2 font-bold ">FOLLOW</span>
        <div className="flex gap-2 text-[14px]">
          <span>
            <Link>
              <RiFacebookFill />
            </Link>
          </span>
          <span>
            <Link>
              <TiSocialTwitter />
            </Link>
          </span>
          <span>
            <Link>
              <TiSocialPinterest />
            </Link>
          </span>
          <span>
            <Link>
              <AiFillInstagram />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasicDetail