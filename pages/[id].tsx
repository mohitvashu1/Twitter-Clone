import Header from "@/components/Header";
import Sidebar from "@/components/LeftCard";
import RightCard from "@/components/RightCard";
import { User } from "@/gql/graphql";
import { useCurrentUser } from "@/hooks/user";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { graphqlClient } from "@/clients/api";
import { getUserByIdQuery } from "@/graphql/query/user";

interface ServerProps {
  userInfo?: User;
}

const UserProfilePage: NextPage<ServerProps> = (props) => {
  const { user } = useCurrentUser();
//   const router = useRouter();

 

  return (
    <div>
      <Header />

      <div>
        <div className="grid grid-cols-12 h-screen overflow-hidden">
          {/* SIDEBAR (LEFT) */}
          <div className="col-span-2 sm:col-span-3 h-screen sticky top-0 overflow-hidden">
            <Sidebar />
          </div>

          {/* Profile */}
          <div className="col-span-10 sm:col-span-6 border-x border-gray-600 h-screen min-h-0 overflow-y-auto">
            <div>
              {/* Upper Part */}
              <div className="border-b border-slate-800">

  {/* COVER */}
  <div className="relative h-52 w-full bg-gray-700">
     {/* {props.userInfo?.coverImageURL ? (
      <Image
        src={props.userInfo.coverImageURL}
        alt="cover"
        fill
        className="object-cover"
      />
    ) : ( */}
      <div className="h-full w-full bg-gray-700" />
    {/* )} */}
  </div>

  {/* PROFILE CONTENT */}
  <div className="px-4 pb-4 relative">

    {/* Profile Image */}
    <div className="absolute -top-16 left-4">
      {props.userInfo?.profileImageURL && (
        <Image
          src={props.userInfo.profileImageURL}
          alt="profile"
          width={130}
          height={130}
          className="rounded-full border-4 border-black object-cover"
        />
      )}
    </div>

    {/* Follow Button */}
    <div className="flex justify-end mt-3">
      <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
        Follow
      </button>
    </div>

    {/* Spacing below overlapping image */}
    <div className="mt-16">

      {/* Name */}
      <h1 className="text-2xl font-bold">
        {props.userInfo?.firstName} {props.userInfo?.lastName}
      </h1>

      {/* Username */}
      <p className="text-gray-400">@{props.userInfo?.id?.slice(0,8)}</p>

      {/* Bio */}
      <p className="mt-3 text-gray-300">
        {"No bio yet"}
        {/* {props.userInfo?.bio || "No bio yet"} */}
      </p>

      {/* Followers */}
      <div className="flex gap-6 mt-3 text-gray-400">
        <span>
          <span className="text-white font-semibold">
            {props.userInfo?.following?.length}
          </span>{" "}
          Following
        </span>

        <span>
          <span className="text-white font-semibold">
            {props.userInfo?.followers?.length}
          </span>{" "}
          Followers
        </span>
      </div>

    </div>
  </div>
</div>
              
              <div>
                {props.userInfo?.tweets?.map((tweet) => (
                  <FeedCard key={tweet?.id} data={tweet as Tweet} />
                ))}
              </div>

              <div></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden sm:block col-span-3 h-screen sticky top-0 overflow-hidden">
            {user && <RightCard user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
};



export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context
) => {
  const id = context.query.id as string | undefined;

  if (!id) return { notFound: true, props: { userInfo: undefined } };

  const userInfo = await graphqlClient.request(getUserByIdQuery, { id });

  if (!userInfo?.getUserById) return { notFound: true };

  return {
    props: {
      userInfo: userInfo.getUserById as User,
    },
  };
};

export default UserProfilePage;