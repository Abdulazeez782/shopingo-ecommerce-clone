import React from 'react'
import WearCard from '../components/WearCard'
import { kidWearImage, menWearImage, womenWearImage } from '../assets/images'

const wearCategories = () => {
  return (
    <section className='w-full mx-auto md:w-[70%] lg:w-full padding-x lg:padding-x-desktop flex flex-col md:flex-row flex-wrap items-center justify-start gap-6 padding-y'>
        <WearCard heading={"MEN WEAR"} subheading={"STARTING AT $9"} imgURL={menWearImage} bgColor={"cyan"}/>
        <WearCard heading={"MEN WEAR"} subheading={"STARTING AT $9"} imgURL={womenWearImage} bgColor={"red"}/>
        <WearCard heading={"MEN WEAR"} subheading={"STARTING AT $9"} imgURL={kidWearImage} bgColor={"yellow"}/>
    </section>
  )
}

export default wearCategories