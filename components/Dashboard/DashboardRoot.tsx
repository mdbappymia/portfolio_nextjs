"use client";

import { Sidebar } from "flowbite-react";
import { BiHome } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const DashboardRoot = ({ children }: any) => {
  return (
    <div className="_75vh">
      <div className="flex gap-5">
        <div>
          <Sidebar aria-label="Default sidebar example" className="_75vh">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiViewBoards}
                  label="Pro"
                  labelColor="dark"
                >
                  About
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox} label="3">
                  Project
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                  Blog
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Services
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Contact
                </Sidebar.Item>
                <Sidebar.Item href="/" icon={BiHome}>
                  Home
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardRoot;
