import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Corrected declaration
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8 || !/^[A-Za-z0-9]+$/.test(password)) {
      setErrorMessage("Пароль должен состоять минимум из 8 символов и включать буквы и цифры.");
      return;
    }
    navigate("/booklist"); // Corrected usage
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
      {errorMessage && <p className="text-red-600 mb-2">{errorMessage}</p>}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;