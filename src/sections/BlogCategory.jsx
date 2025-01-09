import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogCategories  } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

const BlogCategory = () => {
  return (
    <Swiper
        navigation
        loop={true}
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 16,
            }            
        }}
        className='w-[97%] mx-auto md:w-[70%] lg:w-[97%] px-10'
    > 
        {blogCategories.map((category, index) => (
            <SwiperSlide 
                key={index}
            >            
                <BlogCard imgurl={category.imgurl} title={category.heading} paragraph={category.paragraphText} comment={category.comments}/>            
            </SwiperSlide> 
        ))}    
    </Swiper>
  )
}

export default BlogCategory