/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { useAppSelector } from "@/redux/store";
import { Spinner } from "flowbite-react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useAppSelector((state) => state.user);
  const userIsLoading =
    useAppSelector((state) => state.loading.userIsloading) || true;
  const router = useRouter();
  // console.log(user);
  // Redirect unauthenticated users to "/signin"

  useEffect(() => {
    if (user.email?.length) {
      router.push("/dashboard");
    }
  }, [router, user.email, userIsLoading]);

  // Render children only if the user is authenticated
  return (
    <div>
      {!user.email && !userIsLoading ? (
        children
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
