import React from 'react'
import { blogRecentPost1, blogRecentPost2, blogRecentPost3, blogRecentPost4 } from '../assets/images'
import BlogRecentPost from './BlogRecentPost'
import { footerPopularTags } from '../constants'
import Button from './Button'

const blogCategories = [
    {label: "Fashion"},
    {label: "Electroics"},
    {label: "Accesories"},
    {label: "Kitchen and Tables"},
    {label: "Furniture"},
]

const recentPosts = [
    {imgUrl: blogRecentPost1},
    {imgUrl: blogRecentPost2},
    {imgUrl: blogRecentPost3},
    {imgUrl: blogRecentPost4},
]

const BlogSecondSection = () => {
  return (
    <div>
        <div>
            <input type='text' placeholder='Search Posts Here' className='p-2 border-[1px] border-gray-300  w-full'/>
        </div>

        <div>
            <h2 className='text-xl font-semibold mb-5'>Blog Categories</h2>
            <div className='ml-3'>
                {blogCategories.map((category, index) => (
                    <div className='mb-3' key={index}>
                        <a 
                            href='#'
                            className='font-semibold before:content-[">"] before:mr-3 hover:text-blue-600 block mb-3'
                        >
                            {category.label}
                        </a>
                        <hr /> 
                    </div>
                ))}                        
            </div>
        </div>

        <div>            
            {
                recentPosts.map((post, index) => (
                <div 
                    key={index}
                    className='mb-5'
                >
                    <BlogRecentPost imgUrl={post.imgUrl}/> 
                    <hr className='mt-5'/>
                </div>
                ))
            }
        </div>

        <div>
            <h2 className='text-xl font-semibold mb-5'>Popular Tags</h2>
            <div className='flex gap-3 flex-wrap'>
                {
                    footerPopularTags.map((tag, index) => (
                        <div key={index}>
                        <Button label={tag.label} bgColor={"transparent"}/>  
                        </div>                    
                    ))
                }  
            </div>
            
        </div>
    </div>
  )
}

export default BlogSecondSection