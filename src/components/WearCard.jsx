import React from 'react'
import Button from './Button'

const WearCard = ({heading, subheading, imgURL, bgColor}) => {
  return (
    <div 
        className={`h-[200px] max-w-[100%] w-full lg:w-[32%] relative flex-grow`}
        style={{
            backgroundImage: `url(${imgURL})`, 
            backgroundColor: `${bgColor}`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat"
        }}

    >        
        <div className='absolute top-[50%] right-[10%] translate-y-[-50%]'>                
            <h1 className='text-2xl font-bold mb-2'>{heading}</h1>
            <h4 className='text-[.9rem] text-gray-700 mb-2'>{subheading}</h4>
            <Button label={"SHOP NOW"} bgColor={"transparent"} textColor={"black"} borderColor={"border-black"}/>
        </div>
    </div>
  )
}

export default WearCard