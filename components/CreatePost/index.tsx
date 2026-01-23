import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";




const CreatePost: React.FC = () => {
  const {user}=useCurrentUser();
  return (
    <>
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 ">
      <div className="grid grid-cols-12 gap-3">
        <div className="col col-span-1"> 
             {user?.profileImageURL &&
         <Image src={user.profileImageURL}
         alt="#" height={ 30} width={30}
      className="rounded-full object-cover"
               />}
        </div>
        <div className="col col-span-11">
            <textarea className=" w-full bg-transparent text-xl px-3 border-b border-slate-700" rows={3} placeholder="What's Happening"></textarea>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default CreatePost;