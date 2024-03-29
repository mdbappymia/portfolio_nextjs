"use client";

import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const pathname = usePathname();
  return (
    <Navbar
      className="my-5 inset_card_shadow py-6 lg:!px-10 !px-5 rounded-3xl border-gray-300 border"
      fluid
    >
      <Link
        href="/"
        className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
      >
        Bappy
      </Link>
      <div className="flex md:order-2">
        <Button color="lime" pill className="px-5 mx-2">
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
