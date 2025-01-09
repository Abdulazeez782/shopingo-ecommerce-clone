import React from 'react'
import BrowseCategoryCard from '../components/BrowseCategoryCard'
import { Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import { browseWearCategories } from '../constants';

const BrowseCategory = () => {
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
        {browseWearCategories.map((category) => (
            <SwiperSlide>
                <section className='flex'>            
                    <BrowseCategoryCard 
                        imgUrl={category.imgurl} 
                        imgAlt={category.alt}
                        heading={category.heading} 
                        subHeading={category.subHeading}/>   
                </section>
            </SwiperSlide>
        ))}
    </Swiper>

    
  )
}

export default BrowseCategory