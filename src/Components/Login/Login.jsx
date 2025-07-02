import React, { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export const Login = () => {
  const [isloggedin, setIsLoggedin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#68789e] via-[#496493] to-[#202b46] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#183563] text-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <h1 className=/*"text-3xl font-bold"*/ "bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl font-semibold text-transparent ...">
            Welcome Back
          </h1>
          <p className="text-sm text-amber-50 mt-1 space-y-1">
            Please sign in to your account
          </p>
        </div>

        <form className="space-y-5">
          {!isloggedin && (
            <div>
              <label className="block text-sm mb-1 text-gray-300 font-outfit font-semibold tracking-widest ">
                Name
              </label>
              <input
                type="email"
                value={name}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-1 text-gray-300 font-outfit font-semibold tracking-widest ">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300 font-outfit font-semibold tracking-widest">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {!isloggedin && (
            <div>
              <label className="block text-sm mb-1 text-gray-300 font-outfit font-semibold tracking-widest ">
                Username
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={username}
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          )}
          {!isloggedin && (
            <div>
              <label className="block text-sm mb-1 text-gray-300 font-outfit font-semibold tracking-widest ">
                Avatar
              </label>
              <div className="flex items-center relative">
                <input
                  id="fileupload"
                  type="file"
                  placeholder="you@example.com"
                  value={avatar}
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                />
                <label htmlFor="fileupload">
                  <ArrowUpTrayIcon className="h-6 w-6 text-white absolute bottom-2 right-3" />
                </label>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="ml-2 text-white ">Remember me</span>
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition duration-200"
            onClick={
              !isloggedin ? () => handelregister(e) : () => handelregister(e)
            }
          >
            {!isloggedin ? "Register" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-lg text-gray-400">
          {isloggedin ? "Don't have an account :" : "Already have Account"}
          <a
            href="#"
            className="text-blue-400 hover:underline"
            onClick={() => {
              setIsLoggedin(!isloggedin);
            }}
          >
            {!isloggedin ? " Login" : " Sign Up"}
          </a>
        </p>
      </div>
    </div>
  );
};
