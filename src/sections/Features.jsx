import React from 'react'
import FeatureCard from '../components/FeatureCard'
import { carIcon, dollarIcon, telephoneIcon } from '../assets/images'

const Features = () => {
  return (
    <section className='w-full mx-auto md:w-[70%] lg:w-full padding-x lg:padding-x-desktop py-14 flex flex-col lg:flex-row gap-6 items-center justify-center'>
        <FeatureCard imgUrl={carIcon} heading={"FREE SHIPPING & RETURN"} subHeading={"Free shipping on all orders over $49"}/>
        <FeatureCard imgUrl={dollarIcon} heading={"MONEY BACK GUARANTEE"} subHeading={"100% money back guarantee"}/>
        <FeatureCard imgUrl={telephoneIcon} heading={"ONLINE SUPPORT 24/7"} subHeading={"Awesome Support for 24/7 Days"}/>
    </section>
  )
}

export default Features