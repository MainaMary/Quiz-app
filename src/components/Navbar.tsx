import React from "react";

const Navbar = () => {
  return (
    <nav className="flex px-16 shadow font-semibold  w-full justify-between h-20 items-center">
      <h2>Brain Teaser</h2>
      <div>
        <button className=" bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
