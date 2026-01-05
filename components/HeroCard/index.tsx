"use client"; 
import { useState } from "react";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import React from "react";
import { BiHash, BiHomeCircle, BiSearch, BiUser } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";
import FeedCard from "@/components/FeedCard";
import RightCard from "../Trending";
import AuthCard from "../AuthCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <BiHomeCircle /> },
  { title: "Search", icon: <BiSearch /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notifications", icon: <BsBell /> },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "Bookmarks", icon: <BsBookmark /> },
  { title: "Profile", icon: <BiUser /> },
  { title: "More", icon: <CiCircleMore /> },
];

const HeroCard: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="grid grid-cols-12 h-screen">  
      
      {/* Sidebar */}
      <div className="col-span-2 sm:col-span-3 pt-2 flex justify-end sticky top-0 min-h-0">
        <div className="flex flex-col items-center w-full max-w-[260px]">
          
          <ul className="mt-4 w-fit">
            {sidebarMenuItems.map((item) => (
              <li key={item.title} className="w-full">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-[#181919] transition w-full"
                >
                  <span className="text-2xl flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="hidden sm:block text-lg font-medium">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <button className="mt-6 hidden sm:block bg-[#f5eaea] hover:bg-[#949393] text-black font-semibold text-lg py-3 rounded-full w-[65%] self-center">
            Post
          </button>
        </div>
      </div>

      {/* Feed Section */}
      <div className="col-span-10 sm:col-span-6 border-r-[1px] border-l-[1px] border-gray-600 flex-1 min-h-0 overflow-y-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>

      {/* Right Section */}
      <div className="hidden sm:block col-span-3 border-r border-gray-800 sticky top-0 min-h-0 h-screen">
        {!isLoggedIn ? (
        <AuthCard onLogin={() => setIsLoggedIn(false)} />
      ) : (
        <RightCard />
      )}
      </div>
    </div>
  );
};

export default HeroCard;



