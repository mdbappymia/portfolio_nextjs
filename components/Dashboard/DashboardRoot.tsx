"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  BiArrowBack,
  BiArrowToRight,
  BiHome,
  BiLogoBlogger,
  BiPlus,
} from "react-icons/bi";
import { BsArrowBarLeft, BsBag } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiViewBoards,
} from "react-icons/hi";
import { LiaBlogSolid } from "react-icons/lia";
import { MdContactPage, MdRoomService } from "react-icons/md";

const DashboardRoot = ({ children }: any) => {
  const [hideBar, setHideBar] = useState<boolean>(false);
  return (
    <div className="_75vh">
      <div className="flex gap-1">
        <div className="relative">
          <Sidebar
            aria-label="Default sidebar example"
            className={
              "_75vh transition-all !rounded-2xl overflow-hidden " +
              (hideBar && "w-16")
            }
          >
            <Sidebar.Items className={"transition-all " + (hideBar && "w-16")}>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  as={Link}
                  href="/dashboard"
                  icon={HiChartPie}
                  title="Dashboard"
                >
                  {!hideBar && "Dashboard"}
                </Sidebar.Item>
                <Sidebar.Item
                  href="/dashboard/about"
                  icon={FaUser}
                  labelColor="dark"
                  as={Link}
                  title="About"
                >
                  {!hideBar && "About"}
                </Sidebar.Item>
                <Sidebar.Item
                  href="/dashboard/project"
                  icon={HiShoppingBag}
                  as={Link}
                  title="Project"
                >
                  {!hideBar && "Project"}
                </Sidebar.Item>
                <Sidebar.Collapse
                  icon={LiaBlogSolid}
                  label={!hideBar ? "Blog Page" : ""}
                  className={hideBar ? "blog_label_hidden" : ""}
                  title="Blog Page"
                >
                  <Sidebar.Item
                    as={Link}
                    href="/dashboard/blog"
                    icon={BiLogoBlogger}
                    title="Blog"
                  >
                    {!hideBar && "Blog"}
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/dashboard/blog/add_blog"
                    icon={BiPlus}
                    title="Add New"
                  >
                    {!hideBar && "Add New"}
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item
                  as={Link}
                  href="/dashboard/service"
                  icon={MdRoomService}
                  title="Service"
                >
                  {!hideBar && "Services"}
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/dashboard/contact"
                  icon={MdContactPage}
                  title="Contact"
                >
                  {!hideBar && "Contact"}
                </Sidebar.Item>
                <Sidebar.Item as={Link} href="/" icon={BiHome} title="Home">
                  {!hideBar && "Home"}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <div
            className="bg-black text-white p-2 rounded-full inline-block absolute top-1 -right-3 transition-all"
            onClick={() => setHideBar((a) => !a)}
          >
            {!hideBar ? <FaArrowLeft /> : <FaArrowRight />}
          </div>
        </div>
        <div className="w-full overflow-auto p-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardRoot;
