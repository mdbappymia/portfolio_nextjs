"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { BiArrowBack, BiHome, BiLogoBlogger, BiPlus } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const DashboardRoot = ({ children }: any) => {
  const [hideBar, setHideBar] = useState<boolean>(false);
  return (
    <div className="_75vh">
      <div className="flex gap-5">
        <div className="relative">
          <Sidebar
            aria-label="Default sidebar example"
            className={"_75vh " + (hideBar && "w-16")}
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item as={Link} href="/dashboard" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  href="/dashboard/about"
                  icon={HiViewBoards}
                  label="Pro"
                  labelColor="dark"
                  as={Link}
                >
                  About
                </Sidebar.Item>
                <Sidebar.Item
                  href="/dashboard/project"
                  icon={HiInbox}
                  label="3"
                  as={Link}
                >
                  Project
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiShoppingBag} label="Blog Page">
                  <Sidebar.Item
                    as={Link}
                    href="/dashboard/blog"
                    icon={BiLogoBlogger}
                  >
                    Blog
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/dashboard/blog/add_blog"
                    icon={BiPlus}
                  >
                    Add New
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item
                  as={Link}
                  href="/dashboard/service"
                  icon={HiShoppingBag}
                >
                  Services
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/dashboard/contact"
                  icon={HiArrowSmRight}
                >
                  Contact
                </Sidebar.Item>
                <Sidebar.Item as={Link} href="/" icon={BiHome}>
                  Home
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <div
            className="bg-black text-white p-5 rounded-full inline-block absolute top-0 right-0"
            onClick={() => setHideBar((a) => !a)}
          >
            <BiArrowBack />
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardRoot;
