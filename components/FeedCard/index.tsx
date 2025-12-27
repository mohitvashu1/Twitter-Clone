import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    name: "Mohit Choubey",
    username: "@mohitchoubey",
    time: "2h",
    avatar: "https://avatars.githubusercontent.com/u/143756996?v=4",
    content:
      "It is just me or everyone else? Do you feel the code quality decreases as the project size increases? Just refactored a lot of bad code ✨ #codinglife",
    image: null,
    replies: 12,
    retweets: 34,
    likes: 210,
  },
  {
    id: 2,
    name: "Mohit Choubey",
    username: "@mohitchoubey",
    time: "5h",
    avatar: "https://avatars.githubusercontent.com/u/143756996?v=4",
    content:
      "Debugging at 2AM feels like being a detective in your own crime scene 🕵️‍♂️💻 #devlife",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    replies: 5,
    retweets: 18,
    likes: 98,
  },
];


const FeedCard: React.FC = () => {
  return (
    <>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-[#181919] transition-all cursor-pointer"
        >
          <div className="grid grid-cols-12 gap-2">
            {/* Avatar */}
            <div className="col-span-1">
              <Image
                src={tweet.avatar}
                alt="user-avatar"
                height={48}
                width={48}
                className="rounded-full"
              />
            </div>

            {/* Content */}
            <div className="col-span-11">
              {/* Header */}
              <div className="flex items-center gap-2 text-sm">
                <h5 className="font-semibold">{tweet.name}</h5>
                <span className="text-gray-500">{tweet.username}</span>
                <span className="text-gray-500">· {tweet.time}</span>
              </div>

              {/* Text */}
              <p className="mt-1 text-gray-200">{tweet.content}</p>

              {/* Image */}
              {tweet.image && (
                <div className="mt-3">
                  <Image
                    src={tweet.image}
                    alt="tweet-image"
                    width={500}
                    height={300}
                    className="rounded-xl border border-gray-700"
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-between mt-4 text-sm text-gray-500 w-[90%]">
                <div className="flex items-center gap-1 hover:text-[#1d9bf0]">
                  <div className="p-2 rounded-full hover:bg-[#1d9bf01a]">
                    <BiMessageRounded />
                  </div>
                  {tweet.replies}
                </div>

                <div className="flex items-center gap-1 hover:text-[#00ba7c]">
                  <div className="p-2 rounded-full hover:bg-[#00ba7c1a]">
                    <FaRetweet />
                  </div>
                  {tweet.retweets}
                </div>

                <div className="flex items-center gap-1 hover:text-[#f91880]">
                  <div className="p-2 rounded-full hover:bg-[#f918801a]">
                    <AiOutlineHeart />
                  </div>
                  {tweet.likes}
                </div>

                <div className="p-2 rounded-full hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
                  <BiUpload />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;
