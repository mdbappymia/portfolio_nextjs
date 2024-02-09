"use client";

import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const pathname = usePathname();
  return (
    <Navbar
      className="my-10 py-6 !px-10 rounded-3xl border-gray-300 border shadow-sm"
      fluid
    >
      <Navbar.Brand>
        <Link
          href="/"
          className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
        >
          Bappy
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="rounded-full bg-lime-500 dark:bg-lime-600 px-5">
          Let&apos;s Talk
        </Button>
        <DarkThemeToggle />

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          href="/"
          className={`${
            pathname == "/" ? "font-bold text-lime-500" : ""
          } text-lg hover:text-lime-500 transition-colors font-bold`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname == "/about" ? "font-bold text-lime-500" : ""
          } text-lg hover:text-lime-500 transition-colors font-bold`}
        >
          About
        </Link>
        <Link
          href="/project"
          className={`${
            pathname == "/project" ? "font-bold text-lime-500" : ""
          } text-lg hover:text-lime-500 transition-colors font-bold`}
        >
          Project
        </Link>
        <Link
          href="/blog"
          className={`${
            pathname == "/blog" ? "font-bold text-lime-500" : ""
          } text-lg hover:text-lime-500 transition-colors font-bold`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname == "/contact" ? "font-bold text-lime-500" : ""
          } text-lg hover:text-lime-500 transition-colors font-bold`}
        >
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
