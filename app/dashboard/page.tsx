"use client";

import { useAppSelector } from "@/redux/store";

export default function DashboardPage() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as {user.email}</p>
    </div>
  );
}
