/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Exo } from "next/font/google";
import "./globals.css";
import "animate.css";
import MainNavbar from "@/components/Shared/MainNavbar";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import MainFooter from "@/components/Shared/MainFooter";

const font = Exo({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${font.className} dark:bg-gray-900 dark:text-white bg-gray-200`}
      >
        <Provider store={store}>
          <Flowbite>
            <div className="container mx-auto px-2">
              <MainNavbar />
              {children}
              <MainFooter />
            </div>
          </Flowbite>
        </Provider>
        <script
          src="https://kit.fontawesome.com/19f635731a.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
