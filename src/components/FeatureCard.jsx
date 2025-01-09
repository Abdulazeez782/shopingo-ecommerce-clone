import React from 'react'

const FeatureCard = ({heading, subHeading, imgUrl}) => {
  return (
    <div className='border-[1px] border-gray-300 p-5 w-full flex justify-start md:justify-center items-center gap-3 lg:w-[385px]'>
        <img src={imgUrl} className='w-[30px] h-[30px]'/>
        <div>
            <h1 className='text-l lg:text-xl font-bold'>{heading}</h1>
            <p>{subHeading}</p>
        </div>
    </div>
  )
}

export default FeatureCard