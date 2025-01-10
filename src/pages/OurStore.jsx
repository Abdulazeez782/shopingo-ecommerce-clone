import React from 'react'
import PageHeader from '../components/PageHeader'
import { amazonLogo, canonLogo, djiLogo, samsungLogo, motorolaLogo, sonyLogo, microsoftLogo, pumaLogo, adidasLogo, newBalanceLogo, filaLogo, vanHeusenLogo, reebokLogo, ajioLogo, boschLogo} from '../assets/icons'
import TopBrands from '../components/TopBrands'
import { productCards } from '../constants'

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
        {imgUrl: sonyLogo}    
    ]
const OurStore = () => {
  return (
    <section>
      <article className='mb-10'>
          <PageHeader header={"Our Store"} firstLink={"Home"} secondLink={"Pages"} activeLink={"Our Store"}/> 
      </article>

      <article className='grid grid-cols-1 lg:grid-cols-4 gap-[3rem] sections-margin-x mb-10'>
        {
          productCards.map((card, index) => (
            <div className='shadow-uniform'>
              <div
                className='bg-gray-300 flex justify-center items-center'
              >
                <img src={card.imgUrl} alt='card-image'/>  
              </div>

              <div>
                  <h1 className='text-l font-semibold p-2'>{card.heading}</h1>
                  <hr />
                  {card.items.map((item, idx) => (
                    <div>
                      <div 
                        key={index}
                        className='flex justify-between gap-2 p-2'
                      >
                        <p className='text-[14px]'>{item.name}</p>
                        <p className='bg-black text-white rounded-full px-2 text-[11px] flex justify-center items-center'>{item.value}</p>
                        
                      </div>
                      <hr /> 
                    </div>                    
                  ))}                  
                             
              </div>        
            </div>
          ))
        }
      </article>

      <article className='sections-margin-x mb-10'>
        <article className="flex items-center justify-center mb-5">
            <hr className="w-[30%]" />
            <h1 className="text-center text-xl font-bold w-[30%]">POPULAR BRANDS</h1>
            <hr className="w-[30%]"/>
          </article>

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

export default OurStore