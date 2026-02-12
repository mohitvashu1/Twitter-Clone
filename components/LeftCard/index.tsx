'use client'
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiSearch, BiUser } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
  link?: string;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <BiHomeCircle />, link:"/" },
  { title: "Search", icon: <BiSearch /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notifications", icon: <BsBell /> },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "Bookmarks", icon: <BsBookmark /> },
  { title: "Profile", icon: <BiUser />, link:"/profile"},
  { title: "More", icon: <CiCircleMore /> },
];


import React from 'react'

function Sidebar() {
  return (
    <div>
         <div className="flex flex-col items-center w-full max-w-65 pt-2 justify-end sticky top-0">
          <ul className="mt-4 w-fit">
            {sidebarMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link || "#"}
                  className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-[#181919] transition"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="hidden sm:block text-lg font-medium">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <button className="mt-6 hidden sm:block bg-[#f5eaea] hover:bg-[#949393] text-black font-semibold text-lg py-3 rounded-full w-[65%]">
            Post
          </button>
        </div>
    </div>
  )
}

export default Sidebar