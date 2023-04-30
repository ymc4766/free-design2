import React, { useState } from "react";
import Typed from "react-typed";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-violet-600 text-white  h-[80px] z-10  fixed drop-shadow-lg top-0 ">
      <div className="px-2 flex justify-between items-center w-full  h-full">
        <div className="flex items-center  ">
          <h3 className="text-2xl text-black sm:text-4xl w-full ">
            <Typed
              className="md:text-5xl sm:text-4xl font-bold p-2 "
              strings={["I", "YUSUF", "YMC"]}
              typeSpeed={300}
              backSpeed={120}
              backDelay={60}
              loop
            />
          </h3>
          <ul className="hidden md:flex items-center cursor-pointer    ">
            <li className=" uppercase">Home</li>
            <li className=" uppercase">About</li>
            <li className="uppercase">Support</li>
            <li className=" uppercase">Platform</li>
            <li className=" uppercase">Pricing</li>
            <li className=" uppercase">Home</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="px-3 mr-2">Sign in</button>
          <button className="px-3 mr-2 ">Sign up</button>
        </div>

        <div onClick={handleNav} className="md:hidden text-4xl">
          {nav ? (
            <ion-icon name="menu" className="text-blue "></ion-icon>
          ) : (
            <ion-icon name="close"></ion-icon>
          )}
        </div>
      </div>

      {/* // mobile MENU  */}

      <ul
        className={
          nav
            ? "hidden "
            : "absolute  md:hidden items-center w-full px-7 bg-white text-gray-800  "
        }
      >
        <li className="border-b-2  border-zinc-300 uppercase">Home</li>
        <li className="border-b-2  border-zinc-300 uppercase">About</li>
        <li className="border-b-2  border-zinc-300 uppercase">Support</li>
        <li className="border-b-2  border-zinc-300 uppercase">Platform</li>
        <li className="border-b-2  border-zinc-300 uppercase">Pricing</li>
        <li className=" uppercase">Home</li>
        <div className="">
          <button className="px-3 mr-2">Sign in</button>
          <button className="px-3 mr-2 ">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
