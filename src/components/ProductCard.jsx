import React from 'react'
import { clothingCardImage } from '../assets/images'

const ProductCard = ({imgUrl, heading, item1, item1Value, item2, item2Value, item3, item3Value, item4, item4Value}) => {
  return (
    <div className='shadow-uniform'>
        <div
            className='bg-gray-300 flex justify-center items-center'
        >
          <img src={imgUrl} alt='card-image'/>  
        </div>

        <div>
            <h1 className='text-xl font-semibold p-2'>{heading}</h1>
            <hr />
            <div className='flex justify-between gap-2 p-2'>
                <p>{item1}</p>
                <p className='bg-black text-white rounded-full px-2'>{item1Value}</p>
            </div>
            <hr />
            <div className='flex justify-between gap-2 p-2'>
                <p>{item2}</p>
                <p className='bg-black text-white rounded-full px-2'>{item2Value}</p>
            </div>
            <hr />
            <div className='flex justify-between gap-2 p-2'>
                <p>{item3}</p>
                <p className='bg-black text-white rounded-full px-2'>{item3Value}</p>
            </div>
            <hr />
            <div className='flex justify-between gap-2 p-2'>
                <p>{item4}</p>
                <p className='bg-black text-white rounded-full px-2'>{item4Value}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard