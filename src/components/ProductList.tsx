import React from "react";
import { Link, useLocation } from "react-router-dom";
import img66 from "../assets/img-6.png";
import img1 from "../assets/img1.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./Footer";
import Nav from "./Nav";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Plantronics Voyager 520", price: "$29", image: img1 },
    { id: 2, name: "Klipsch Pro 2", price: "$37", image: img2 },
    { id: 3, name: "Plantronics M50", price: "$50", image: img3 },
    { id: 4, name: "Klipsch S1M ", price: "$34", image: img4 },
    { id: 5, name: "JBL Club 500", price: "$57", image: img8 },
    { id: 6, name: "Klipsch Heritage 3", price: "$68", image: img66 },
    { id: 7, name: "Denon AH-D9200", price: "$150", image: img12 },
    { id: 8, name: "Plantonics M70", price: "$77", image: img5 },
    { id: 9, name: "JBL Tour 400", price: "$45", image: img7 },
    { id: 10, name: "SteelSeries Arctis 9X", price: "$65", image: img9 },
    { id: 11, name: "Skullcandy SLYR", price: "$23", image: img10 },
    { id: 12, name: "Denon AH-D9200", price: "$29", image: img11 },
  ];

  const location = useLocation();

  return (
    <>
      {location.pathname === "/products" ? <Nav /> : ""}
      <div className="container mx-auto lg:px-14 px-8 my-6">
        {location.pathname === "/products" ? (
          <h3 className="text-base font-medium">
            <Link to={"/"} className="flex items-center">
              <span className="text-lg">
                <Icon icon="fluent:chevron-left-16-regular" />
              </span>
              Back
            </Link>
          </h3>
        ) : (
          ""
        )}

        <h1 className="text-2xl font-bold my-4">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" object-cover mb-4"
                />
              </div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <p className="flex items-center gap-2 text-[#e9dc31]">
                <span className="text-base">
                  <Icon icon="basil:star-solid" />
                </span>
                <span className="text-base">
                  <Icon icon="basil:star-solid" />
                </span>
                <span className="text-base">
                  <Icon icon="basil:star-solid" />
                </span>
                <span className="text-base">
                  <Icon icon="system-uicons:star" />
                </span>
              </p>
              <button className="bg-[#1c8f78] text-white px-4 py-2 mt-4 rounded flex items-center gap-2 ">
                <span className="text-lg">
                  <Icon icon="mdi-light:cart" />
                </span>{" "}
                <Link to={"/cart"}> Add to Cart</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      {location.pathname === "/products" ? <Footer /> : ""}
    </>
  );
};

export default ProductList;
