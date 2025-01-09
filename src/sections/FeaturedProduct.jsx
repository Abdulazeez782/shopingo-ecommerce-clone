import React from 'react'
import { featuredProduct } from '../constants'
import FeaturedProductCard from '../components/FeaturedProductCard'

const FeaturedProduct = () => {
  return (
    <section 
        className='w-full mx-auto md:w-[70%] lg:w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 padding-x lg:padding-x-desktop padding-y'>        
        {featuredProduct.map((product, index) => (
            <article key={index} className=''>
                <FeaturedProductCard productImage={product.imgurl} productName={product.name}/>
            </article>
        ))}
    </section>        
  )
}

export default FeaturedProduct