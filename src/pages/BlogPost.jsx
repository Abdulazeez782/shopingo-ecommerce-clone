import React from 'react'
import PageHeader from '../components/PageHeader'
import BlogPostCard from '../components/BlogPostCard'
import BlogSecondSection from '../components/BlogSecondSection'
import { blogPostImage1, blogPostImage2, blogPostImage3 } from '../assets/images'

const blogImages = [
    {imgUrl: blogPostImage1},
    {imgUrl: blogPostImage2},
    {imgUrl: blogPostImage3}
]

const BlogPost = () => {
  return (
    <section>
        <article className='mb-10'>
           <PageHeader  header={"Blog"} firstLink={"Home"} secondLink={"Blog"} activeLink={"Blog Posts"}/> 
        </article>

        <article className='sections-margin-x flex flex-col lg:flex-row gap-4'>
            <div className='w-full md:w-[75%]'>
                {
                    blogImages.map((image, index) => (
                        <div key={index} className='mb-5'>
                          <BlogPostCard imgUrl={image.imgUrl}/>   
                        </div>                       
                    ))
                }
                
            </div>
            <div className='w-full md:w-[25%] border-[1px] p-5 border-gray-200'>                
                <BlogSecondSection />
            </div>            
        </article>
    </section>
  )
}

export default BlogPost