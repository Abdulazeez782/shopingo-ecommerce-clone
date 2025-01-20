import React from 'react'
import { footerPopularTags } from '../constants'

const ProductTags = ({activePage}) => {
  return (
    <article className={`${(activePage === "tags") ? "block" : "hidden"} flex gap-5 flex-wrap`}>
        {
            footerPopularTags.map((tag, index) => (
                <button
                    key={index}
                    className='bg-transparent border-[1px] border-black p-2 hover:text-white hover:bg-black'
                >
                    {tag.label}
                </button>
            ))
        } 
    </article>
  )
}

export default ProductTags