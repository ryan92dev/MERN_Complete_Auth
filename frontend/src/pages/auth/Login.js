import React, { useState } from "react";

const Login = () => {
  return (
    <section className="my-24">
      <div className="container px-4 mx-auto">
        <div className="relative max-w-lg px-6 pt-16 pb-16 mx-auto bg-gray-500 md:px-10 lg:px-16 rounded-xl">
          <div className="relative max-w-md mx-auto text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-100">
              Log in to your account
            </h2>
            <p className="mb-10 font-medium text-gray-300">
              Welcome back! Please enter your details.
            </p>
            <form action="">
              <div className="relative w-full px-3 py-4 mb-8 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                  Email
                </span>
                <input
                  className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                  id="signInInput1-1"
                  type="email"
                />
              </div>
              <div className="relative w-full px-3 py-4 mb-6 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                  Password
                </span>
                <input
                  className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none"
                  id="signInInput1-2"
                  type="password"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <input id="signInInput1-3" type="checkbox" />
                  <label
                    className="ml-2 text-xs font-semibold text-gray-300"
                    for=""
                  >
                    Remember for 30 days
                  </label>
                </div>
                <div className="w-full sm:w-auto">
                  <a
                    className="inline-block text-xs font-semibold text-blue-500 hover:text-blue-600"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <button className="block w-full py-4 mb-4 font-semibold leading-6 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600">
                Sign In
              </button>
              <a
                className="flex items-center justify-center w-full py-4 mb-6 font-semibold leading-6 text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-700"
                href="#"
              >
                <div className="w-4 bg-white rounded-sm">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z"
                      fill="#F44336"
                    ></path>
                  </svg>
                </div>
                <span className="ml-3">Sign In with Gmail</span>
              </a>
              <p className="font-medium">
                <span className="text-gray-300">Don’t have an account?</span>
                <a
                  className="inline-block text-blue-500 hover:underline"
                  href="#"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
