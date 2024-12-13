"use client";

import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const user = useAppSelector((state) => state.user);
  // console.log(user);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user.email) {
  //     return router.push("/signin");
  //   }
  // }, [router, user]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as {user.email}</p>
    </div>
  );
}
