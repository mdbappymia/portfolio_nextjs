"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode"; // Install this library with `npm install jwt-decode`

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  console.log(user);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin");
    } else {
      try {
        // Decode the token to get user details
        const decodedToken: any = jwtDecode(token);
        setUser({ email: decodedToken.email }); // Extract the email from the token
      } catch (error) {
        console.error("Invalid token", error);
        router.push("/signin"); // Redirect if the token is invalid
      }
    }
  }, [router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as {user.email}</p>
    </div>
  );
}
