import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import img6 from "../assets/img6.png";
import img10 from "../assets/img10.png";
import img12 from "../assets/img12.png";
import Nav from "./Nav";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
  color: "Blue" | "Pink" | "White";
}

const Cart: React.FC = () => {
  const location = useLocation();

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Plantronics Audio 478",
      description: "PLTHD00425",
      price: "$235.29",
      quantity: 1,
      image: img12,
      color: "Blue",
    },
    {
      id: 2,
      name: "Klipsch Pro 3",
      description: "KPSHD00389",
      price: "$145.34",
      quantity: 2,
      image: img6,
      color: "Pink",
    },
    {
      id: 2,
      name: "Klipsch Pro 3",
      description: "JBLHD00321",
      price: "$799.99",
      quantity: 1,
      image: img10,
      color: "White",
    },
  ];

  return (
    <div>
      {location.pathname === "/cart" ? <Nav /> : ""}
      <div className="container mx-auto lg:px-14 px-8 py-6">
        <div className="flex justify-between items-center">
          <p className="my-2 text-xl text-gray-700 font-semibold">
            Your shopping Cart
          </p>
          <Link
            to="/checkout"
            className="bg-[#1c8f78] text-white  text-sm px-4 py-2.5 mt-4 rounded flex items-center"
          >
            Proceed to Checkout
            <span className="text-lg">
              <Icon icon="octicon:arrow-right-16" />
            </span>
          </Link>
        </div>
        <div className="">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 bg-white shadow-lg rounded-lg px-5 py-3 my-5"
            >
              <div className="flex items-center gap-2">
                <div>
                  <img src={item.image} alt="" className="w-28" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
              <p>{item.color}</p>
              <div className="flex items-center gap-3">
                <p>{item.quantity}</p>
                <div>
                  <div className="flex flex-col gap-y-3">
                    <button className="bg-[#1c8f78] px-2 rounded-md">
                      <span className="font-semibold text-lg text-white">
                        +
                      </span>
                    </button>
                    <button className="bg-[#1c8f78] px-2 rounded-md">
                      <span className="font-semibold text-lg text-white">
                        -
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p>{item.price}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium hover:text-[#1c8f78] hover:underline">
              <Link to={"/products"} className="flex items-center">
                <span className="text-lg">
                  <Icon icon="fluent:chevron-left-16-regular" />
                </span>
                Back to shop
              </Link>
            </h3>
            <h2 className="flex items-center gap-3 font-bold text-sm text-[#222]">
              Subtotal: <span> $1739.33</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
