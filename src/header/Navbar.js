import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] m-auto">
      <h1 className="text-3xl w-full font-bold text-[#00df59]">React</h1>

      <ul className="hidden md:flex ">
        <li className="p-2 uppercase">Home</li>
        <li className="p-2 uppercase">Company</li>
        <li className="p-2 uppercase">Contact</li>
        <li className="p-2 uppercase"> Work</li>
        <li className="p-2 uppercase">Home</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="" />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>

      {/* // mobile Menu */}

      <div
        className={
          nav
            ? "fixed  md:hidden left-0 top-0 w-[60%] h-full bg-[#001] border-r-gray-700 ease-in-out duration-300  "
            : "fixed left-[-100%] hidden md:hidden "
        }
      >
        <h1 className="text-3xl w-full font-bold text-[#00df59] m-4">React</h1>

        <ul className=" uppercase p-4">
          <li className="p-3  border-b border-gray-600">Home</li>
          <li className="p-3 border-b border-gray-600">Company</li>
          <li className="p-3 border-b border-gray-600">Contact</li>
          <li className="p-3 border-b border-gray-600"> Work</li>
          <li className="p-3 ">Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
