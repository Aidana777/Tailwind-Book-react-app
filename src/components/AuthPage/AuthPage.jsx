import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 border rounded-lg shadow">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="mt-4">
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={toggleForm}
          >
            {isLogin ? "Need an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
