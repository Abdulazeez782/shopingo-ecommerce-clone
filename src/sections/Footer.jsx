import React from 'react'
import { contactInfo, footerCategories, footerPaymentLogos, footerPopularTags } from '../constants'
import { appleLogo, playStore, } from '../assets/images'
import Button from '../components/Button'

const Footer = () => {
  return (
    <footer>
        <div className='bg-gray-100 p-2 py-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='pb-5'>
                <h1 className='text-2xl font-bold pb-3'>CONTACT INFO</h1>
                {contactInfo.map((contact, index) => (
                    <div
                        key={index}
                        className='pb-2' 
                    >
                        <h2 className='text-xl font-bold'>{contact.label}</h2>
                        <p className='text-gray-600'>{contact.info}</p>
                        <p className='text-gray-600'>{contact.secondInfo}</p>
                    </div>
                ))}
                               
            </div>

            <div className='pb-5'>
                <h1 className='text-2xl font-bold pb-3'>CATEGORIES</h1>
                {footerCategories.map((category, index) => (
                    <div>
                        <a 
                            href={category.href}
                            className='text-gray-600 inline-block pb-2 relative before:content-[">"] before:mr-1 before:text-gray-600'
                        >
                            {category.label}
                        </a>
                    </div>  
                ))}
                
            </div>

            <div className='pb-5'>
                <h1 className='text-2xl font-bold pb-3'>POPULAR TAGS</h1>
                <div className='flex flex-wrap gap-2'>
                    {footerPopularTags.map((tag, index) => (
                        <a 
                            href={tag.href}
                            key={index}
                            className='border-2 border-black p-2 hover:bg-black hover:text-white'
                        >                            
                            {tag.label}                           
                        </a>
                    ))}
                </div>
                
            </div>

            <div>
                <h1 className='text-2xl font-bold pb-3'>STAY INFORMED</h1>
                <div>
                    <input type='text' placeholder='Enter Your Email' className='w-[100%] p-2 border-2 border-black mb-2'/>
                    <div>
                       <Button label={"SUBSCRIBE"}/> 
                    </div>
                    <p className='text-gray-500 mt-3'>Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
                </div>
                <h3 className='text-xl font-bold my-2'>DOWNLOAD OUR APP</h3>
                <div className='flex gap-2'>
                    <img src={appleLogo} alt='apple-logo' width={150} height={150} className='cursor-pointer'/>
                    <img src={playStore} alt='playstore-logo' width={150} height={150} className='cursor-pointer'/>
                </div>
            </div>
        </div>

        <div className='bg-white p-2 flex flex-col items-center gap-3 lg:flex-row lg:justify-between'>
            <div>
                <p>Copyright &copy; 2025. All right reserved.</p>
            </div>
            <div className='flex gap-2 items-center p-2'>
                {footerPaymentLogos.map((logo, index) => (
                    <div className='bg-gray-200 px-4 h-[50px] flex items-center border-2 border-gray-300 rounded-sm'>
                        <img src={logo.imgurl} alt='payment-logo' width={60} height={80}/>   
                    </div> 
                ))}
                                              
            </div>
        </div>
    </footer>
  )
}

export default Footer