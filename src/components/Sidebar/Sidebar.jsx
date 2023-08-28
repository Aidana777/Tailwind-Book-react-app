import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ products, onSortChange, onCheckboxChange, onReset, sortAsc }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Products and Filters</h2>
      <ul className="space-y-2">
        {products && products.map((product) => ( 
          <li key={product.id}>
            <Link to={`/booklist/${product.id}`} className="text-blue-500 hover:underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <label className="block mb-2">
          <input
            type="checkbox"
            onChange={onCheckboxChange}
            className="mr-2"
          />
          Show Only Available
        </label>
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSortChange}
        >
          {sortAsc ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div>
        <button
          className="mt-4 block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onReset}
        >
          Reset Filters
        </button>
      </div>
 
    </div>
  );
};

export default Sidebar;

