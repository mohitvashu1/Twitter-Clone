
import { AiOutlineMail } from "react-icons/ai";
import { CgMore, CgMoreO } from "react-icons/cg";
import { CiMail } from "react-icons/ci";

const RightCard : React.FC =()=>{
    return(
        <div>
            <div className="mt-10 p-5 m-8 border-[1px] border-gray-600 rounded-lg">
                <div>
                    <h1 className="text-2xl flex justify-start font-bold">What's happening</h1>
                </div>
         
                <div className="mt-10"> 

                <div className="flex items-start justify-between ">
               <div >
                    <p className="text-gray-400 text-xs">Entertainment.Trending</p>
                    <h1 className="text-sm">#Alpha</h1>
                     <p className="text-gray-400 text-sm">1475 posts</p>
               </div>
                <CgMore className="text-gray-500 cursor-pointer mt-3" />
                </div>

                <div className="mt-5 flex items-start justify-between">
                    <div><p className="text-gray-400 text-xs ">Politcs.Trending</p>
                <h1 className="text-sm">#Narendra Modi</h1>
                <p className="text-gray-400 text-xs ">895 posts</p></div>
                     <CgMore className="text-gray-500 cursor-pointer mt-3" />
                </div>

                <div className="mt-5 flex items-start justify-between">
                    <div><p className="text-gray-400 text-xs ">Sports.Trending</p>
                <h1 className="text-sm">#Virat Kohli</h1>
                <p className="text-gray-400 text-xs ">165 posts</p></div>
                     <CgMore className="text-gray-500 cursor-pointer mt-3" />
                </div>

                <div className="mt-5 flex items-start justify-between">
                    <div><p className="text-gray-400 text-xs ">Person.Trending</p>
                <h1 className="text-sm">#Mohit Choubey</h1>
                <p className="text-gray-400 text-xs ">75 posts</p></div>
                     <CgMore className="text-gray-500 cursor-pointer mt-3" />
                </div>

                {/* <div className="mt-5 flex items-start justify-between">
                    <div><p className="text-gray-400 text-xs ">Food.Trending</p>
                <h1 className="text-sm">#Butter Chiken</h1>
                <p className="text-gray-400 text-xs ">255 posts</p></div>
                     <CgMore className="text-gray-500 cursor-pointer mt-3" />
                </div> */}

            </div>
            
            </div>


               <div className="fixed bottom-6 right-6">
  <button className="
    w-14 h-14 
    rounded-xl 
    bg-black 
    border border-gray-700
    flex items-center justify-center
    shadow-lg
    hover:bg-gray-600
    transition
    duration-300 ease-out
  ">
    <AiOutlineMail className="text-white font-bold text-3xl hover:text-gray-100" />
  </button>
</div>
        </div>
    )
}

export default RightCard ;