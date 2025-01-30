import React from 'react'

const BlogRecentPost = ({imgUrl}) => {
  return (
    <div className='flex gap-5'>
        <img src={imgUrl} alt='recent-post-image' width={80}/>

        <div>
            <h1>Post title here</h1>
            <p className='text-gray-500'>March 15, 2021</p>
            
        </div>
    </div>
  )
}

export default BlogRecentPost