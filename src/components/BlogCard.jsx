import React from 'react'

const BlogCard = ({imgurl, title, paragraph, comment}) => {
  return (
    <article className='relative border border-gray-200'>
        <img src={imgurl} alt='blog-image'/>
        <div className='bg-black text-white absolute top-3 left-3 px-3 py-1'>
            <h1 className='text-2xl font-bold'>24</h1>
            <p className='uppercase mt-[-8px] text-[15px]'>Feb</p>
        </div>
        <div className='border-b-2 p-3'>
            <h1 className='text-2xl pb-3'>{title}</h1>
            <p className='text-gray-700'>{paragraph}</p>
        </div>        
        <p className='p-3'>{comment} Comments</p>
    </article>
  )
}

export default BlogCard