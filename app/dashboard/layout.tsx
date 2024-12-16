/* eslint-disable @next/next/no-sync-scripts */
"use client";

import DashboardRoot from "@/components/Dashboard/DashboardRoot";
import { useAppSelector } from "@/redux/store";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useAppSelector((state) => state.user);
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);
  const router = useRouter();

  // Redirect unauthenticated users to "/signin"
  useEffect(() => {
    if (!userIsLoading && !user.email) {
      router.push("/signin");
    }
  }, [router, user.email, userIsLoading]);

  if (userIsLoading) {
    return <div>Loading...</div>;
  }

  // Render children only if the user is authenticated
  return (
    <div>{user.email ? <DashboardRoot>{children}</DashboardRoot> : null}</div>
  );
}
