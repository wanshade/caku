import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md w-full px-4 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex-1">
          <a className=" normal-case text-lg md:text-xl ">Catatanku</a>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <a className="text-sm md:text-base">Home</a>
            </li>
            <li>
              <a className="text-sm md:text-base">About</a>
            </li>
            <li>
              <a className="text-sm md:text-base">Services</a>
            </li>
            <li>
              <a className="text-sm md:text-base">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary btn-sm md:btn-md mr-2">
            Login
          </button>
          <button className="btn btn-outline btn-sm md:btn-md">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
