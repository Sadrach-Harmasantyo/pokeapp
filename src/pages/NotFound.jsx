import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0a141e] text-white">
      <h1 className="font-bold text-3xl">404</h1>
      <h1 className="font-bold text-3xl">Page Not Found</h1>
      <Link to="/" className="rounded-full bg-[#466e9b] py-1 px-5 font-semibold mt-5 text-xl">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
