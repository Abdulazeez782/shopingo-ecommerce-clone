import React from 'react'
import QuickSalesCard from '../components/QuickSalesCard'
import { sunglassImage, cosmeticsImage, fashionSummerImage, electronicsImage } from '../assets/images'
import FashionSummer from '../components/FashionSummer'

const QuickSales = () => {
  return (
    <section className='bg-black w-full  padding-x lg:padding-x-desktop padding-y'>
        <div className='mx-auto md:w-[70%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <QuickSalesCard 
                productImage={sunglassImage} 
                percentageOff={"-10%"} 
                buttonLabel={"SHOP BY GLASSES"}
                firstHeader={"Sunglasses Sale"}
                paragraphText={"See all Sunglasses and get 10% off at all Sunglasses"}
            />
            <QuickSalesCard 
                productImage={cosmeticsImage}
                percentageOff={"-50%"}
                buttonLabel={"SHOP BY COSMETICS"}
                firstHeader={"Cosmetics Sale"}
                paragraphText={"Buy Cosmetics products and get 30% off at all Cosmetics"}
            />
            <FashionSummer />
            <QuickSalesCard 
                productImage={electronicsImage} 
                percentageOff={"-30%"} 
                buttonLabel={"HURRY UP"}
                firstHeader={"SUPER SALE"}
                paragraphText={"On All electronics"}
                spanText={"UP TO 50% OFF"}
                textSize={"text-4xl"}
                fontMode={"font-bold "}
            />
        </div>        
        
    </section>
  )
}

export default QuickSales