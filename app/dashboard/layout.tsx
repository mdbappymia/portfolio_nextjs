/* eslint-disable @next/next/no-sync-scripts */
"use client";

import DashboardRoot from "@/components/Dashboard/DashboardRoot";
import { useAppSelector } from "@/redux/store";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);
  const user = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   if (user.email === null && userIsLoading === false) {
  //     router.push("/signin");
  //   }
  // }, [router, user.email, userIsLoading]);

  return (
    <div>
      {!userIsLoading && user.email ? (
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
