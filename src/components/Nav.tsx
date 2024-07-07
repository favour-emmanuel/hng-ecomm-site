import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      label: "Home",
      path: "/home",
      onclick: () => {
        navigate("/home");
      },
    },
    {
      label: "Shop",
      path: "/products",
      onclick: () => {
        navigate("/products");
      },
    },
    {
      label: "Contact",
      path: "/contact",
      onclick: () => {
        navigate("/contact");
      },
    },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3.5 border-b border-neutral-700/80 backdrop-blur-lg bg-appBlack text-white">
      <div className="container lg:px-14 px-8 mx-auto text-sm relative">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            <Link to={"/"}>
              Tech<span className="text-[#2dcbab]">trove</span>
            </Link>
          </h1>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} onClick={item.onclick}>
                <Link
                  to={""}
                  className={
                    location.pathname === item.path ? "text-[#2dcbab]" : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-8">
            <span className="text-2xl cursor-pointer">
              <Link to={"/cart"}>
                <Icon icon="mdi:cart" />
              </Link>
            </span>
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>
              {!nav ? (
                <span className="text-2xl transition-transform">
                  <Icon icon="mingcute:menu-line" />
                </span>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:hidden ">
        {nav ? (
          <div className="bg-appBlack/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full max-w-[23rem] md:max-w-[29rem] py-3  h-screen bg-[#262626] z-10 duration-300"
              : "fixed left-[-100%] top-0 min-h-[90vh] z-10 duration-300"
          }
        >
          <div className="pb-4 w-full border-b border-white/15">
            <div className="px-8">
              <h1 className="text-xl font-bold tracking-tight">
                <Link to={"/"}>
                  Tech <span className="text-[#2dcbab]">trove</span>
                </Link>
              </h1>
              <span className="absolute right-4 top-4 cursor-pointer font-bold text-lg text-appsecondary">
                {" "}
                <Icon
                  onClick={() => {
                    setNav(false);
                  }}
                  icon="icon-park-outline:close"
                />
              </span>
            </div>
          </div>
          <ul className="flex flex-col  gap-5 cursor-pointer mt-10 px-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-4 hover:text-[#2dcbab]"
                onClick={item.onclick}
              >
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-5 px-8 mt-5">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:border-[#2dcbab]"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
