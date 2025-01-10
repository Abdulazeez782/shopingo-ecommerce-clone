import React from 'react'
import PageHeader from '../components/PageHeader'
import WhyChooseUsCard from '../components/WhyChooseUsCard'
import {deliveryImage, moneyImage, supportImage} from '../assets/icons'
import TopBrands from '../components/TopBrands'
import { amazonLogo, canonLogo, djiLogo, samsungLogo, motorolaLogo, sonyLogo, microsoftLogo, pumaLogo, adidasLogo, newBalanceLogo, filaLogo, vanHeusenLogo, reebokLogo, ajioLogo, boschLogo} from '../assets/icons'
import PopularBrands from '../sections/PopularBrands'

const AboutUs = () => {
    const whyChooseUs = [
        {
            imgUrl: deliveryImage, 
            heading: "FREE SHIPPING", 
            paragraphText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae expedita distinctio"
        },
        {
            imgUrl: moneyImage, 
            heading: "100% MONEY BAG GUARANTEE", 
            paragraphText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae expedita distinctio"
        },
        {
            imgUrl: supportImage, 
            heading: "ONLINE SUPPORT 24/7", 
            paragraphText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae expedita distinctio"
        }
    ]

    const topBrands = [
        {imgUrl: amazonLogo},
        {imgUrl: canonLogo},
        {imgUrl: djiLogo},
        {imgUrl: samsungLogo},
        {imgUrl: motorolaLogo},
        {imgUrl: microsoftLogo},        
        {imgUrl: pumaLogo},
        {imgUrl: adidasLogo},
        {imgUrl: newBalanceLogo},
        {imgUrl: filaLogo},
        {imgUrl: vanHeusenLogo},
        {imgUrl: reebokLogo},   
        {imgUrl: ajioLogo},
        {imgUrl: boschLogo},     
    ]
  return (
    <section>
        <article className='mb-10'>
           <PageHeader  header={"About Us"} firstLink={"Home"} secondLink={"Pages"} activeLink={"About Us"}/> 
        </article>

        <article className='sections-margin-x mb-10'>
            <h1 className='text-xl font-bold mb-5'>Our Story</h1>
            <p className='text-gray-400 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae expedita distinctio beatae unde, nemo quis id eum iusto doloribus mollitia veritatis incidunt velit nisi quam cumque corporis quia asperiores.</p>

            <p className='text-gray-400 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam voluptatibus beatae velit commodi excepturi ex consequatur minima atque in numquam, consequuntur laboriosam reprehenderit amet! Pariatur debitis ullam perferendis temporibus!</p>

            <p className='text-gray-400 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus aliquam corporis temporibus adipisci praesentium eum expedita vero, neque quas repellat sunt culpa? Beatae, aliquam. Dolor molestiae pariatur nemo sed!</p>
        </article>  

        <article className='sections-margin-x mb-10'>
            <h1 className='text-xl font-bold mb-5'>Why Choose Us</h1>
            <hr className='mb-5'/>

            <div className='flex flex-col md:flex-row gap-3'>
                {whyChooseUs.map((why, index) => (
                    <div 
                        key={index}                        
                    >
                        <WhyChooseUsCard img={why.imgUrl} header={why.heading} paragraphText={why.paragraphText}/>    
                    </div>                   
                ))}
                
            </div>
        </article> 

        <article className='sections-margin-x mb-10'>
            <h1 className='text-xl font-bold mb-5'>Our Top Brands</h1>
            <hr className='mb-5'/>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {topBrands.map((brand, index) => (
                    <div 
                        key={index}
                        className='border-[1px] border-gray-200 p-4'
                    >
                        <TopBrands imgUrl={brand.imgUrl}/>
                    </div>                        
                ))}
                
            </div>
        </article>     
    </section>
  )
}

export default AboutUs