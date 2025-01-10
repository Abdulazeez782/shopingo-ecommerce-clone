import React from 'react'

const PageHeader = ({header, firstLink, secondLink, activeLink}) => {
  return (
    <div className='hidden lg:flex justify-between items-center mt-10 bg-gray-100 border-y-2 border-gray-300 sections-padding-x py-4'>
            <h1 className='text-xl font-bold'>{header}</h1>
            <div className='flex gap-3'>
                <a className='text-xl font-semibold after:content-[">"] after:pl-3'>{firstLink}</a>
                <a className='text-xl font-semibold after:content-[">"] after:pl-3'>{secondLink}</a>
                <a className='text-xl font-semibold text-gray-400'>{activeLink}</a>
            </div>
    </div>
  )
}

export default PageHeader