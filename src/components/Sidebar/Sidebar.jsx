import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ products }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/booklist/${product.id}`} className="text-blue-500 hover:underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/cart"
        className="mt-4 block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go to Cart
      </Link>
    </div>
  );
};

export default Sidebar;
