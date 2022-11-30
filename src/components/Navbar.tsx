import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex px-16 shadow font-semibold  w-full justify-between h-20 items-center">
      <h2 onClick={() => navigate("/form")}>Brain Teaser</h2>
      <div>
        <button className=" bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
