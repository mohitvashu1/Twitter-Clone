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
              <nav className="flex border-b-2 border-slate-950">
                <Link href={"/"}>
                  <div className="mt-3 text-2xl p-4">
                    <IoMdArrowBack />
                  </div>
                </Link>

                <div className="mt-2 ml-12 text-xl">
                  {props.userInfo?.firstName} {props.userInfo?.lastName}
                </div>
              </nav>

              <div className="p-4 border-b border-slate-800">
                {props.userInfo?.profileImageURL && (
                  <Image
                    src={props.userInfo.profileImageURL}
                    alt="props.userInfo"
                    height={120}
                    width={120}
                    className="rounded-full"
                  />
                )}

                <h1 className="text-xl font-semibold mt-5">
                  {props.userInfo?.firstName} {props.userInfo?.lastName}
                </h1>
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