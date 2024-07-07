import React from "react";

const Checkout: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Checkout</h1>
      <form className="bg-white shadow-lg rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Credit Card Number</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Complete Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
