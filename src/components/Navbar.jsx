import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white w-full flex justify-center p-5">
      <a href="/">
        <img src={logo} alt="logo" className="w-42 h-22" />
      </a>
    </div>
  );
};

export default Navbar;
