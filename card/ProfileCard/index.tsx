import FeedCard from '@/components/FeedCard'
import { Tweet } from '@/gql/graphql'
import { useCurrentUser } from '@/hooks/user'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

function Profile() {
  const {user}= useCurrentUser()
  
  return (  
   <div >
    {/* Upper Part */}
    <nav className='flex border-b-2 border-slate-950'>
      <Link href={"/"}><div className='mt-3  text-2xl p-4'><IoMdArrowBack /></div></Link>
     <div className=' mt-2 ml-12 text-xl'>{user?.firstName} {user?.lastName}</div>
   </nav>

   <div className='p-4 border-b border-slate-800'>
    {user?.profileImageURL &&( 
    <Image
      src={user.profileImageURL}
      alt="user"
      height={120}
      width={120}
      className='rounded-full'
    />
    )}
    <h1 className='text-xl font-semibold mt-5'>{user?.firstName} {user?.lastName}</h1>
   
   </div>
   <div>
    {user?.tweets?.map((tweet) => (
      <FeedCard  key={tweet?.id} data={tweet as Tweet}/>
    ))}
   </div>

   
   <div>
    
   </div>

   </div> 
  )
}

export default Profile