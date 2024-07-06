import { useState } from "react";
import { navItems } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg bg-appBlack text-white">
      <div className="container px-10 mx-auto text-sm relative">
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
            <span className="text-2xl">
              <Icon icon="mdi:cart" />
            </span>
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
          </div>
          <div>
            <span className="text-2xl">
              <Icon icon="mingcute:menu-line" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
