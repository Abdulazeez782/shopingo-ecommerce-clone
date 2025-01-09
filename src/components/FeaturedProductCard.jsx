import React, { useState } from 'react'
import Button from './Button'
import { starIcon } from '../assets/icons'
import { addCartImage, favoriteIcon } from '../assets/images'
// import { Link } from "react-router-dom";


const FeaturedProductCard = ({productImage, productName}) => {
    const [mouseOver, isMouseOver] = useState(false);
  return (
    <div className='flex flex-col gap-3'>
        <div 
            className='relative cursor-pointer'
            onMouseOver={() => isMouseOver(true)}
            onMouseLeave={() => isMouseOver(false)}
            >
            <img src={productImage} alt='product-image' width={350} height={250}/>
            <img src={addCartImage} alt='cart-icon' width={40} height={40} className={`absolute top-5 right-5 bg-white p-1.5 rounded-full ${mouseOver ? "block" :"hidden"}`}/>
            <a className={`absolute bottom-0 w-full bg-black text-white text-center p-2 ${mouseOver ? "block" :"hidden"}`}>Quick View</a>
        </div>
        
        <div className='flex justify-between'>
            <div>
                <p className='text-[15px]'>Topwear</p>
                <h4 className='font-bold'>{productName}</h4> 
            </div> 
            <img src={favoriteIcon} className='w-[20px] h-[20px]'/>           
        </div>
        <div className='flex gap-1'>
            <img src={starIcon} width={10} height={10}/>
            <img src={starIcon} width={10} height={10}/>
            <img src={starIcon} width={10} height={10}/>
            <img src={starIcon} width={10} height={10}/>
            <img src={starIcon} width={10} height={10}/>
        </div>
        <p><del className='text-gray-400'>$59.00</del> <span className='font-bold ml-2'>$48.00</span></p>
    </div>
  )
}

export default FeaturedProductCard