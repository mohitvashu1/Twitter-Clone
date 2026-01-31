"use client";

import React from "react";
import Link from "next/link";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiSearch, BiUser } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";

import FeedCard from "@/components/FeedCard";
import RightCard from "../Trending";
import AuthCard from "../AuthCard";
import { useCurrentUser } from "@/hooks/user";
import CreatePost from "../CreatePost";
import { useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";

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
  const { user } = useCurrentUser();
  const {tweets=[]}=useGetAllTweets()

  

  return (
    <div className="grid grid-cols-12 h-screen">
      
      {/* Sidebar */}
      <div className="col-span-2 sm:col-span-3 pt-2 flex justify-end sticky top-0">
        <div className="flex flex-col items-center w-full max-w-65">
          <ul className="mt-4 w-fit">
            {sidebarMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href="#"
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

      {/* Feed */}
      <div className="col-span-10 sm:col-span-6 border-x border-gray-600 overflow-y-auto">
        <CreatePost/>
        {
          tweets?.map(tweet => <FeedCard key={tweet?.id} data={tweet as Tweet}/>)
        }
        
      </div>

      {/* Right Section */}
      <div className="hidden sm:block col-span-3 sticky top-0 h-screen">
        {user && <RightCard user={user} />}
      </div>
    </div>
  );
};

export default HeroCard;
 