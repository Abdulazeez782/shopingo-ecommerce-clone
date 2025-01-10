import React from 'react'

const WhyChooseUsCard = ({img, header, paragraphText, imgAlt}) => {
  return (
    <div>
        <img src={img} alt={imgAlt} width={50} className='mb-5'/>
        <h1 className='text-xl font-semibold mb-5'>{header}</h1>
        <p className='text-gray-400'>{paragraphText}</p>
    </div>
  )
}

export default WhyChooseUsCard