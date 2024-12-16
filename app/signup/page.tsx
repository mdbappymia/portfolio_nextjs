"use client";

import { setUserIsloading } from "@/redux/slices/loadingSlice";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setLoading(true);

    try {
      dispatch(setUserIsloading(true));
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(setUserIsloading(false));
        router.push("/signin");
      } else {
        dispatch(setUserIsloading(false));
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      dispatch(setUserIsloading(false));
      setError("Unable to connect. Please try again later.");
    }
    dispatch(setUserIsloading(false));
    setLoading(false);
  };

  return (
    <>
      <div className="_75vh flex justify-center items-center">
        <div className="w-96 mx-auto p-6 bg-gray-100 rounded-lg shadow-md dark:bg-slate-700">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6 dark:text-white">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 dark:text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border dark:text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 dark:text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border dark:text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 dark:text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border dark:text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white font-bold rounded-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            {error && (
              <div className="text-red-500 mt-4 text-center">{error}</div>
            )}
          </form>
          <p className="text-sm text-center text-gray-600 dark:text-white mt-6">
            Have already an account?{" "}
            <a
              href="/signin"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
