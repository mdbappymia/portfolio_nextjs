/* eslint-disable @next/next/no-sync-scripts */
"use client";

import DashboardRoot from "@/components/Dashboard/DashboardRoot";
import { useAppSelector } from "@/redux/store";
import { Spinner } from "flowbite-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);

  return (
    <div>
      {!userIsLoading ? (
        <DashboardRoot>{children}</DashboardRoot>
      ) : (
        <div className="text-center _75vh flex items-center w-full justify-center">
          <Spinner
            aria-label="Center-aligned spinner example"
            size="xl"
            className="font-bold"
          />
        </div>
      )}
    </div>
  );
}
