import React from "react";
import { PiListFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className=" bg-slate-700 text-white text-base font-semibold flex items-center justify-between phone:p-4 tablet:py-3 tablet:px-6">
      <div className="flex logo items-center gap-2 cursor-pointer">
        <img src="/to-do-list.png" alt="logo" width={40} /><span className="font-bold text-xl">OnTimer</span>
      </div>
      <div className="phone:block tablet:hidden">
      <PiListFill />
      </div>
      <ul className="tablet:flex phone:hidden phone:gap-2 tablet:gap-10">
        <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">Home</li>
        <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">My Task</li>
        <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">About Me</li>
        <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">Contact Me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
