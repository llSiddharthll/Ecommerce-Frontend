import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios"
import { isAuthenticated } from "./authService";

const Login = () => {

  const [formdata, setformdata] = useState({
    username: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/auth/token/login/", formdata)
      .then(response => {
        console.log(response);
        if (response.data.auth_token) {
          localStorage.setItem("auth_token", response.data.auth_token);
          localStorage.setItem("user_credentials", JSON.stringify(formdata));
          isAuthenticated()
          window.location.href = "/";
        }

      })
      .catch(error =>{
        alert("Wrong Username or password")
      })
  }

  return (
    <div className="flex h-[93vh] bg-gray-100">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-blue-600">
        <img src="login.png" alt="Illustration" className="w-3/4 h-auto" />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white px-6 lg:px-16 xl:px-24">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">Welcome Back</h1>
            <p className="text-gray-500 mt-2">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-100">
                  <FaUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={formdata.username}
                  onChange={(e) =>
                    setformdata({ ...formdata, username: e.target.value })
                  }
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-100">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formdata.password}
                  onChange={(e) =>
                    setformdata({ ...formdata, password: e.target.value })
                  }
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="/" className="text-sm text-blue-500 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Bottom Section */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:text-blue-700">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
