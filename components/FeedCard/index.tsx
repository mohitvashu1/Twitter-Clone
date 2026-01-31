import { Tweet } from "@/gql/graphql";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

interface FeedCardProps {
  data: Tweet;
}

const FeedCard: React.FC<FeedCardProps> = ({ data }) => {
  return (
    <div className="px-4 py-3 border border-gray-800 hover:bg-[#080808] transition cursor-pointer">
      <div className="grid grid-cols-[48px_1fr] gap-3">
        {/* Avatar */}
        <Image
          src={data.author?.profileImageURL || "/avatar.png"}
          alt="user-avatar"
          height={48}
          width={48}
          className="rounded-full"
        />

        {/* Content */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 text-sm">
            <h5 className="font-semibold">
              {data.author?.firstName} {data.author?.lastName}
            </h5>
            <span className="text-gray-500">
              @{data.author?.firstName?.toLowerCase()}
            </span>
            <span className="text-gray-500">· 2h</span>
          </div>

          {/* Text */}
          <p className="mt-1 text-gray-200 leading-relaxed">
            {data.content}
          </p>

          {/* Image */}
          {data.imageURL && (
            <div className="mt-3 overflow-hidden rounded-xl border border-gray-700">
              <Image
                src={data.imageURL}
                alt="tweet-image"
                width={600}
                height={350}
                className="object-cover max-h-105"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between mt-3 text-sm text-gray-500 max-h-105">
            <div className="flex items-center gap-1 hover:text-[#1d9bf0]">
              <div className="p-2 rounded-full hover:bg-[#1d9bf01a]">
                <BiMessageRounded />
              </div>
            </div>

            <div className="flex items-center gap-1 hover:text-[#00ba7c]">
              <div className="p-2 rounded-full hover:bg-[#00ba7c1a]">
                <FaRetweet />
              </div>
            </div>

            <div className="flex items-center gap-1 hover:text-[#f91880]">
              <div className="p-2 rounded-full hover:bg-[#f918801a]">
                <AiOutlineHeart />
              </div>
            </div>

            <div className="p-2 rounded-full hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
