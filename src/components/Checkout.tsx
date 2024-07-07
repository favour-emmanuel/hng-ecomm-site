import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./Footer";
import visaCard from "../assets/visa.svg";
import mastercCard from "../assets/mast-card.svg";

const Checkout: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div className="container mx-auto px-8 w-full max-w-[60rem]">
        <h1 className="text-xl font-bold text-[#0d0d0d] my-5">Card Details</h1>
        <form className="bg-white shadow-lg rounded-lg py-5 px-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-base">
              Select Card Type
            </label>
            <div className="flex items-center gap-2 ml-[-6px] my-2">
              <img src={visaCard} alt="" className="w-[4rem]" />
              <img src={mastercCard} alt="" />
            </div>
          </div>
          <div className="my-5">
            <label className="block text-slate-700 font-semibold text-base">
              Card Number
            </label>
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full border-b text-xs pt-3 pb-1 text-gray-400 outline-none"
            />
          </div>
          <div className="my-4">
            <div className="flex justify-between items-center">
              <label className="block text-slate-700 font-semibold text-base">
                Expiring Date
              </label>
              <label className="block text-slate-700 font-semibold text-base">
                CVV
              </label>
            </div>
            <div className="flex items-center gap-6">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border-b text-xs pt-3 pb-1 text-gray-400 outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full border-b text-xs pt-3 pb-1 text-gray-400 text-right outline-none"
              />
            </div>
          </div>

          <div className="text-right">
            <button className="bg-[#209279] text-white px-4 py-2 rounded">
              Complete Purchase
            </button>
          </div>
        </form>
        <h3 className="text-base font-medium mt-7">
          <Link to={"/cart"} className="flex items-center">
            <span className="text-lg">
              <Icon icon="fluent:chevron-left-16-regular" />
            </span>
            Back to Cart
          </Link>
        </h3>
      </div>
      <div className="fixed w-full bottom-0">
        {location.pathname === "/checkout" ? <Footer /> : ""}
      </div>
    </div>
  );
};

export default Checkout;
