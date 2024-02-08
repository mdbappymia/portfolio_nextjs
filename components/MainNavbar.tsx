"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";

export default function MainNavbar() {
  return (
    <Navbar className="my-10 py-5" fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bappy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
