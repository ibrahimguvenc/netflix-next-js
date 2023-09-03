"use client";

import { AuthContext } from "@/context/AuthContext";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    // console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider();
  };
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign in
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floating_email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floating_password">Password</label>
              </div>
              <div className="flex justify-between">
                <span
                  className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
                  onClick={() => forgotPassword(email)}
                >
                  Forgot Password
                </span>
                <Link
                  className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
              <button className="btn-danger" type="submit">
                Sign In
              </button>
              <button
                className="flex items-center justify-between btn-danger"
                type="button"
                onClick={handleProviderLogin}
              >
                Continue with Google
                <GoogleIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
