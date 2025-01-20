import React from 'react'
import { redTop, favoriteIcon } from '../assets/images'

const ShopCartCard = ({price, imgUrl}) => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 mb-5'>
        <div>
            <img src={imgUrl} alt='item-image' width={120}/>
        </div>
        
        <div>
            <h1 className='text-xl mb-3'>White Regular Polo T-Shirts</h1>
            <p className='text-gray-500'>Size: Regular</p>
            <p className='text-gray-500 mb-3'>Color: White & Blue</p>
            <h1 className='text-xl'>{price}</h1>
        </div>

        <div>
            <input type='number' value="2" className='border-[1px] border-black p-2'/>
            
        </div>

        <div className='flex items-center justify-center gap-1'>
            <button
                className='border-[1px] border-black px-4 py-2 hover:bg-black hover:text-white'
            >
                X  REMOVE
            </button>
            <img src={favoriteIcon} alt='favorite-icon' width={40} height={40} className='bg-gray-100 p-2'/>
        </div>               
    </div>
  )
}

export default ShopCartCard