import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { easeIn } from 'motion'
import { starIcon } from '../assets/icons'
import Button from './Button'
import { whitePolo, yellowPolo, bluePolo, redPolo } from '../assets/images'

const ProductDetailsCard = () => {
    const [currentImage, setCurrentImage] = useState(whitePolo);
    const smallPoloImages = [
        {imgUrl: bluePolo, imgAlt: "polo-blue"},
        {imgUrl: redPolo, imgAlt: "polo-red"},
        {imgUrl: whitePolo, imgAlt: "polo-white"},
        {imgUrl: yellowPolo, imgAlt: "polo-yellow"}
    ]
  return (
    <section>
        <article className='sections-margin-x mb-10 flex flex-col lg:flex-row gap-3'>
            <div className='w-full lg:w-[40%]'>              
                        <div                                       
                            className='border-[1px] p-2 mb-5'
                        >
                            <AnimatePresence>
                               { 
                                    currentImage &&
                                    <motion.img 
                                        key={currentImage}
                                        initial={{x: -10}} 
                                        animate={{x: 0}}
                                        // exit={{x: 10}}
                                        transition={{duration: 0.2, ease: easeIn}} 
                                        src={currentImage} 
                                        alt='big-polo-image'
                                        className='w-[100%]'
                                    /> 
                                } 
                            </AnimatePresence>                            
                        </div>

                <div className='flex gap-3 items-center justify-center'>
                    {
                        smallPoloImages.map((image, index) => (
                            <div 
                                key={index}
                                className='border-[1px] p-1'
                                onClick={() => setCurrentImage(image.imgUrl)}
                            >
                                <img src={image.imgUrl} alt={image.imgAlt} width={80} height={80}/>
                            </div>  
                        ))
                    }                    
                </div>
            </div>

            <div className='w-full lg:w-[60%]'>
                <h1 className='text-xl font-bold mb-2'>Creative Ajadi Men's Polo T-Shirts</h1>
                <div className='flex gap-3 mb-2'>
                    <img src={starIcon} alt='star-icon' width={10}/>
                    <img src={starIcon} alt='star-icon' width={10}/>
                    <img src={starIcon} alt='star-icon' width={10}/>
                    <img src={starIcon} alt='star-icon' width={10}/>
                    <img src={starIcon} alt='star-icon' width={10}/>
                    <p>(24 ratings)</p>
                </div>
                <p className='text-[20px] mb-2'><s className='text-[15px] mr-2'>$98.00</s>$49.00</p>
                <div className='mb-5'>
                    <h4>Description</h4>
                    <p>Creative Ajadi Men's Polo T-Shirts is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
                </div>
                <div className='flex gap-[4rem] mb-2'>
                    <h4>Product ID</h4>
                    <p>#BHU5879</p>
                </div>
                <div className='flex gap-[5rem] mb-2'>
                    <h4>Delivery</h4>
                    <p>Russia, USA, and Europe</p>
                </div>

                <div className='flex gap-5 mb-5'>
                    <div>
                        <p className='mb-2'>Quantity</p>
                        <select className='border-[1px] w-[60px] rounded p-[3px]'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2'>Size</p>
                        <select className='border-[1px] w-[60px] rounded p-[3px]'>
                            <option>l</option>
                            <option>xl</option>
                            <option>xxl</option>
                            <option>xxxl</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2'>Colors</p>
                        <div className='flex gap-3 items-center'>
                            <p className='bg-red-700 rounded-full h-[25px] w-[25px]'></p>
                            <p className='bg-blue-700 rounded-full h-[25px] w-[25px]'></p>
                            <p className='bg-green-700 rounded-full h-[25px] w-[25px]'></p>
                            <p className='bg-yellow-700 rounded-full h-[25px] w-[25px]'></p>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] md:w-[60%] flex gap-3'>
                    <Button label={'ADD TO CART'} />
                    <Button label={"ADD TO WISHLIST"} />
                </div>
            </div>
        </article>
    </section>
  )
}

export default ProductDetailsCard