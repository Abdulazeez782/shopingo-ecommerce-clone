import React from 'react'
import { jamesAvatar, davidAvatar, peterAvatar } from '../assets/images'
import { starIcon } from '../assets/icons'
import Button from './Button'

const ProductReviews = ({activePage}) => {
    const reviews = [
        {imgUrl: jamesAvatar, name: "James Ajadi", date: "January 5, 2025"},
        {imgUrl: davidAvatar, name: "David Ajadi", date: "January 7, 2025"},
        {imgUrl: peterAvatar, name: "Peter Ajadi", date: "January 19, 2025"},
    ]
  return (
    <article className={`${(activePage === "reviews") ? "block" : "hidden"} w-[100%] flex flex-col md:flex-row gap-7`}>
        <div className='w-[100%] md:w-[65%]'>
            <h1 className='text-xl mb-5'>3 Reviews for the product</h1>
            <div>
                {
                    reviews.map((review, index) => (
                        <div className='flex gap-3 mb-5'>
                            <div>
                                <img src={review.imgUrl} alt='user-avatar' width={100} height={100} className='rounded-full'/>
                            </div>

                            <div>
                                <div className='flex justify-between items-center mb-3'>
                                    <div className=''>
                                        <div className='flex gap-3'>
                                            <img src={starIcon} alt='star-icon'/>
                                            <img src={starIcon} alt='star-icon'/>
                                            <img src={starIcon} alt='star-icon'/>
                                            <img src={starIcon} alt='star-icon'/>
                                            <img src={starIcon} alt='star-icon'/>
                                        </div> 
                                        <h1>{review.name}</h1>
                                    </div>
                                    <div>
                                        <p>{review.date}</p>
                                    </div>  
                                </div>                   
                                <p>
                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                </p>
                            </div>
                        </div>  
                    ))
                }
            </div>
            
        </div>


        <div className='w-[100%] md:w-[35%] border-[1px] p-3'>
            <aside>
                <h1 className='mb-8'>Write a Review</h1>
                <form>
                    <div className='mb-3'>
                        <label>Your Name</label>
                        <input 
                            type='text' 
                            className='w-[100%] p-1 border-[1px]'
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Your Email</label>
                        <input 
                            type='email' 
                            className='w-[100%] p-1 border-[1px]'
                        />
                    </div>  
                    
                    <div className='mb-3'>
                        <label>Rating</label>
                        <select className='w-[100%] p-1 border-[1px]'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div> 

                    <div className='mb-3'>
                        <label>Your Review</label>
                        <textarea 
                            className='w-[100%] p-1 border-[1px]'
                        />
                    </div> 
                    <Button label={"SUBMIT A REVIEW"}/>                 
                </form>
            </aside>
        </div>
    </article>
  )
}

export default ProductReviews