import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="md:px-16 px-7  mt-16 border-t border-t-appsecondary bg-gray-200">
        <div className="md:flex-row flex flex-col md:justify-between pt-5 pb-3">
          <h1 className="font-extrabold text-base text-appsecondary">
            <Link to={"/"}>
              Tech<span className="text-[#2dcbab]">trove</span>
            </Link>
          </h1>

          <Link to="">
            <p className="font-normal text-sm text-appsecondary">
              Techtrove.com &copy; 2024. All rights reserved{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
