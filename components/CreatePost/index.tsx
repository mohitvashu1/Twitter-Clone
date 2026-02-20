import { useCreateTweet } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { CiImageOn } from "react-icons/ci";




const CreatePost: React.FC = () => {
  const {user}=useCurrentUser();
  const [content,setContent]=useState('')
  const {mutate}=useCreateTweet()

  const haldleSelectImage = useCallback(()=>{
    const input =document.createElement('input')
    input.setAttribute('type','file')
    input.setAttribute('accept','image/*')
    input.click()
    
  },[])
   
  const haldleCreateTweet = useCallback(() => {
  if (!content.trim()) return;

  mutate({ content });
}, [content, mutate]); 

  return (
    <>
    <div className="border  border-gray-600 p-5 ">
      <div className="grid grid-cols-12 gap-3">
        <div className="col col-span-1"> 
             {user?.profileImageURL &&
         
         <Link href={"/profile"}> <Image src={user.profileImageURL}
         alt="#" height={ 30} width={30}
      className="rounded-full object-cover"
               /></Link>
         }
        </div>
        <div className="col col-span-11">
            <textarea 
            value={content}
            onChange={e =>setContent(e.target.value)}
            className=" w-full bg-transparent text-xl px-3 border-b border-slate-700" 
            rows={2} placeholder="What's Happening"></textarea>
            <div className="mt-2 flex justify-between items-center">
              <CiImageOn onClick={haldleSelectImage}
              className="text-2xl hover:text-[#1d9bf0]"/>
              <button 
              onClick={haldleCreateTweet}
              className="  bg-[#f5eaea] hover:bg-[#949393] text-black font-semibold text-lg py-1 rounded-full w-25">
            Post
          </button>
            </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default CreatePost;