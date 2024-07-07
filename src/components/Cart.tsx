import React from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const cartItems: CartItem[] = [
    { id: 1, name: "Product 1", price: "$10", quantity: 1 },
    { id: 2, name: "Product 2", price: "$20", quantity: 2 },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Product Listing</h1>
      <p>Your shopping Cart</p>
      <div className="bg-white shadow-lg rounded-lg p-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-700">{item.price}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4">Qty: {item.quantity}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-right">
          <Link
            to="/checkout"
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
