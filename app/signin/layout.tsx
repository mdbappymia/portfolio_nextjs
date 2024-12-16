/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { useAppSelector } from "@/redux/store";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useAppSelector((state) => state.user);
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);
  const router = useRouter();
  console.log(user);
  // Redirect unauthenticated users to "/signin"
  useEffect(() => {
    if (!userIsLoading && !user.email?.length) {
      router.push("/signin");
    } else {
      router.push("/dashboard");
    }
  }, [router, user.email, userIsLoading]);

  if (userIsLoading) {
    return <div>Loading...</div>;
  }

  // Render children only if the user is authenticated
  return <div>{!user.email ? children : null}</div>;
}
