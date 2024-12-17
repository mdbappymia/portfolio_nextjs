"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { clearUser, setUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/store";
import { setUserIsloading } from "@/redux/slices/loadingSlice";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    dispatch(setUserIsloading(true));

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage or cookies
        localStorage.setItem("access_token", data.token);
        // Redirect to a protected route or dashboard
        const decodedToken: any = jwtDecode(data.token);
        const decodeUser = data.user;
        // console.log(data.user);
        dispatch(
          setUser({
            id: decodeUser.id,
            email: decodedToken.email,
            name: decodeUser.name,
            role: decodeUser.role || "user",
          })
        );

        router.push("/dashboard");
        dispatch(setUserIsloading(false));
      } else {
        setError(data.error || "Invalid credentials");
        dispatch(clearUser());
        dispatch(setUserIsloading(false));
      }
    } catch (err) {
      setError("Unable to connect. Please try again later.");
    }

    setLoading(false);
  };

  // useEffect(() => {
  //   if (user.email?.length && user.email?.length > 5) {
  //     // console.log(user);
  //     // console.log("Inside the user condition");
  //     return router.push("/dashboard");
  //   }
  // }, [router, user]);

  return (
    <div className="flex items-center justify-center _75vh">
      <div className="w-full max-w-md p-6 bg-white dark:bg-slate-700  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border dark:text-black border-gray-300  rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 dark:text-black border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          {error && (
            <div className="text-red-600 text-sm mt-2 text-center">{error}</div>
          )}
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-white mt-6">
          Don`t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
