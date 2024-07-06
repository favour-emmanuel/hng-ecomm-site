import { useState } from "react";
import { navItems } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="sticky top-0 z-50 py-3.5 border-b border-neutral-700/80 backdrop-blur-lg bg-appBlack text-white">
      <div className="container lg:px-14 px-8 mx-auto text-sm relative">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Techtrove</h1>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-8">
            <span className="text-2xl cursor-pointer">
              <Icon icon="mdi:cart" />
            </span>
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>
              {nav ? (
                <span className="text-2xl transition-transform">
                  <Icon icon="mingcute:close-line" />
                </span>
              ) : (
                <span className="text-2xl transition-transform">
                  <Icon icon="mingcute:menu-line" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {nav && (
        <div className="lg:hidden fixed duration-300 ease-in-out right-0 top-[3.6rem]  z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-5">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
