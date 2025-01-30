import React from 'react'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'


const BlogPostCard = ({imgUrl}) => {
  return (
    <div className='border-[1px] border-gray-200'>
        <div>
          <img src={imgUrl} alt='' width={900} className='mb-5'/>  
        </div>

        <div className='flex gap-5 flex-wrap ml-3 text-gray-500'>
            <div className='flex gap-1 items-center justify-center'>
                <UserIcon className='w-[15px]'/>
                <p>By Admin</p>
            </div>
            
            <div className='flex gap-1 items-center justify-center'>
                <ChatBubbleBottomCenterIcon className='w-[15px]'/>
                <p>10 comments</p>
            </div>

            <div className='flex gap-1 items-center justify-center'>
                <CalendarIcon className='w-[15px]'/>
                <p>By Admin</p>
            </div>
        </div>

        <div className='mt-5 ml-3'>
            <h1 className='text-2xl font-semibold mb-2'>Post Title Here</h1>
            <p className='text-gray-500 mb-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <button className='bg-black text-white p-2 relative after:content-[">>"] after:w-[10px] after:h-1 after:pl-1 mb-3'>READ MORE</button>
        </div>
    </div>
  )
}

export default BlogPostCard