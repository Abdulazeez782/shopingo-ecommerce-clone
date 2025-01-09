import React from 'react'

const BrowseCategoryCard = ({imgUrl, imgAlt, heading, subHeading}) => {
  return (
    <article className='border border-gray-200'>
        <img src={imgUrl} alt={imgAlt} />
        <div className='text-center'>
            <h1 className='uppercase'>{heading}</h1>
            <p className='uppercase'>{subHeading}</p>
        </div>
    </article>
  )
}

export default BrowseCategoryCard