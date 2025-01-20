import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProductDetailsCard from '../components/ProductDetailsCard'
import ProductDescription from '../components/ProductDescription'
import ProductMoreInfo from '../components/ProductMoreInfo'
import ProductTags from '../components/ProductTags'
import ProductReviews from '../components/ProductReviews'
import SimiliarProducts from '../components/SimiliarProducts'
import { yellowTop, blueStripeTop, redTop, multiColoredTop } from '../assets/images'
import FeaturedProductCard from '../components/FeaturedProductCard'

const ProductDetails = () => {
    const [activePage, setActivePage] = useState("description");

    const buttons = [
        {id: 1, name: "description"},
        {id: 1, name: "more info"},
        {id: 1, name: "tags"},
        {id: 1, name: "reviews"}
    ]

    const similiarProducts = [
        {imgUrl: yellowTop, name: "Yellow Polo Shirt"},
        {imgUrl: redTop, name: "Red Polo Shirt"},
        {imgUrl: blueStripeTop, name: "blue Polo Shirt"},
        {imgUrl: multiColoredTop, name: "Multicolored Polo Shirt"},
    ]
  return (
    <section>
        <article className='mb-10'>
            <PageHeader header={"Creative Ajadi Men's Polo T-shirts"} firstLink={"Home"} secondLink={"Shop"} activeLink={"Product Details"}/> 
        </article>

        <article>
            <ProductDetailsCard />
        </article>

        <article className='sections-margin-x mb-10'>
            <div className='flex gap-5 mb-5 border-b-[1px]'>
                {buttons.map((button, index) => (
                    <button 
                        key={index}
                        className={`uppercase  ${(activePage === button.name) ? "border-x-[1px] border-t-[1px]" : ""} p-[5px]`}
                        onClick={() => setActivePage(button.name)}
                    >
                        {button.name}
                    </button>
                ))}                
            </div>

            <div>
                <ProductDescription activePage={activePage}/>
                <ProductMoreInfo activePage={activePage}/>
                <ProductTags activePage={activePage}/>
                <ProductReviews activePage={activePage}/>
            </div>
        </article>

        <article className='sections-margin-x mb-10'>
                <article className="flex items-center justify-center mb-5">
                  <hr className="w-[30%]" />
                  <h1 className="text-center text-xl font-bold w-[30%]">SIMILIAR PRODUCTS</h1>
                  <hr className="w-[30%]"/>
                </article>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                   {
                    similiarProducts.map((product, index) => (
                        <FeaturedProductCard productImage={product.imgUrl} productName={product.name}/>
                    ))
                   } 
                </div>
        </article>
    </section>    
  )
}

export default ProductDetails