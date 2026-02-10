"use client";

import React from "react";
import FeedCard from "@/components/FeedCard";
import RightCard from "../RightCard";
import { useCurrentUser } from "@/hooks/user";
import CreatePost from "../CreatePost";
import { useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import Sidebar from "../LeftCard";


const HeroCard: React.FC = () => {
const { user } = useCurrentUser();
  const {tweets=[]}=useGetAllTweets()

  

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      
      {/* Sidebar */}
      <div className="col-span-2 sm:col-span-3 h-screen sticky top-0 overflow-hidden ">
       <Sidebar/>
      </div>

      {/* Feed */}
      <div className="col-span-10 sm:col-span-6 border-x border-gray-600 h-screen min-h-0 overflow-y-auto ">
        <CreatePost/>
        {
          tweets?.map(tweet => <FeedCard key={tweet?.id} data={tweet as Tweet}/>)
        }
        
      </div>

      {/* Right Section */}
      <div className="hidden sm:block col-span-3 h-screen sticky top-0 overflow-hidden">
        {user && <RightCard user={user} />}
      </div>
    </div>
  );
};

export default HeroCard;
 