import Profie from "@/card/ProfileCard";
import Header from "@/components/Header";
import Sidebar from "@/components/LeftCard";
import RightCard from "@/components/RightCard";
import { useCurrentUser } from "@/hooks/user";
import { NextPage } from "next";
import { useRouter } from "next/router";

const UserProfilePage : NextPage=()=>{
    const { user } = useCurrentUser();
    const router =useRouter()
    console.log(router.query);
    return(
        <div>
            <Header/>
            <div>
                <div className="grid grid-cols-12 h-screen overflow-hidden">
                    {/* SIDEBAR(LEFT) */}
                     <div className="col-span-2 sm:col-span-3 h-screen sticky top-0 overflow-hidden ">
                         <Sidebar/>
                       </div>

                    {/* Profile */}
                         <div className="col-span-10 sm:col-span-6 border-x border-gray-600 h-screen min-h-0 overflow-y-auto ">
                             <Profie/>
                         </div>
                       
                     {/* Right Section */}
                         <div className="hidden sm:block col-span-3 h-screen sticky top-0 overflow-hidden">
                         {user && <RightCard user={user} />}
                        </div>
                </div>
            </div>
        </div>

    )
}
export default UserProfilePage; 