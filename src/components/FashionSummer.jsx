import React from 'react'
import { fashionSummerImage } from '../assets/images'
import Button from './Button'

const FashionSummer = () => {
  return (
    <article className='relative'>
        <img src={fashionSummerImage} alt='Fashion Summer Image' className='h-[100%]'/>
        <div className='w-[90%] mx-auto absolute top-5 left-[50%] translate-x-[-50%] border-2 border-white text-white bg-[#0000005e] text-center py-4'>
            <h3 className='text-2xl pb-2'>Fashion summer sale</h3>
            <h1 className='text-5xl font-bold pb-2'>UP TO 80% OFF</h1>
            <h3 className='text-2xl pb-2'>On Top Fashion Brands</h3>
            <Button label={"SHOP BY FASHION"} bgColor={"bg-white"} textColor={"text-black"}/>
        </div>
    </article>
  )
}

export default FashionSummer