import React from 'react'
import Button from './Button'

const QuickSalesCard = ({productImage, percentageOff, buttonLabel, firstHeader, paragraphText, spanText, textSize, fontMode}) => {
  return (
    <article className='bg-white relative'>
        <div className=''>
            <img src={productImage} alt="alt" className='w-[100%]'/>
            <p className='absolute bg-red-700 text-white p-3 rounded-full top-5 right-5'>{percentageOff}</p>
        </div>

        <div className='text-black text-center py-8 px-4'> 
            <h1 className={`${(textSize) ? `${textSize} ${fontMode}` : "text-3xl"} pb-3`}>{firstHeader}</h1>
            <p className={`text-gray-600 pb-3`}><span className='block text-4xl'>{spanText}</span>{paragraphText}</p>
            <Button label={buttonLabel}/>
        </div>
        
    </article>
  )
}

export default QuickSalesCard