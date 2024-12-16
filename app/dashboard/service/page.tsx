"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

const DashboardHome = () => {
  const user = useAppSelector((state) => state.user);
  // console.log(user);
  return (
    <div>
      <h1>Service page</h1>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as {user.email}</p>
    </div>
  );
};

export default DashboardHome;
