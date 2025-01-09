import React from 'react'
import Button from '../components/Button'
import { Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import { Autoplay } from "swiper/modules";

const slides = [
    {
        id: 1,
        background: "bg-hero",
        subHeading: "Women Fashion"
    },
    {
        id: 2,
        background: "bg-hero2",
        subHeading: "Men Fashion"
    },
    {
        id: 3,
        background: "bg-hero3",
        subHeading: "Kid Fashion"
    }
]

const Hero = () => {
  return (
    <Swiper 
        modules={[Autoplay]}
        navigation
        autoplay={{delay: 2000}}
        loop={true}
        className="h-[20vh] lg:h-[70vh] md:h-[50vh] sm:h-[30vh]"
    >
        {slides.map(slide => (
            <SwiperSlide
                key={slide.id}
                className={`bg-cover bg-center w-full bg-no-repeat ${slide.background}`}
            >
                <section className="m-10 lg:pb-20 absolute flex flex-col items-start justify-end gap-1 lg:gap-3">
                    <h3 className='hidden lg:block text-2xl font-bold'>New Trending</h3>
                    <h2 className='text-2xl lg:text-4xl font-extrabold'>{slide.subHeading}</h2>
                    <p className='hidden lg:block italic'>Last call for upto 15%</p>
                    <Button label={"SHOP NOW"}/>
                </section>
            </SwiperSlide>
        ))}
    </Swiper>
    
  )
}

export default Hero