import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-auto p-4 lg:p-0">
      {/* Add responsive classes for mobile styling */}
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">
        Register
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;


