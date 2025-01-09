import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import { djiLogo, samsungLogo, motorolaLogo, sonyLogo, microsoftLogo, amazonLogo, canonLogo } from '../assets/icons'

const PopularBrands = () => {
  return (
    <Swiper 
        modules={[Autoplay]}
        navigation
        loop={true}
        slidesPerView={2}
        autoplay={{delay: 2000}}
        breakpoints={{
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            }            
        }}
        className='w-[97%] mx-auto md:w-[70%] lg:w-[97%] px-10'
    >
        <SwiperSlide>            
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={djiLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={samsungLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={motorolaLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide> 
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={sonyLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={microsoftLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>   
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={amazonLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
            <div className='border-[1px] border-gray-200 p-4'>
                <img src={canonLogo} alt='popular-brand-logo' width={200} height={200}/>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default PopularBrands