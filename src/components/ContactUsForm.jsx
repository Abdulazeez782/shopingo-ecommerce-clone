import React from 'react'
import Button from './Button'

const ContactUsForm = () => {
  return (
    <div className='bg-gray-100 p-2'>
        <h1 className='mb-5 font-semibold'>DROP US A LINE</h1>
        <hr className='mb-5'/>

        <form>            
            <div className='mb-5'>
                <label className='inline-block pb-2'>Enter Your Name</label>
                <input 
                    type='text' 
                    className='w-full border-[1px] p-1' 
                />
            </div>
            
            <div className='mb-5'>
                <label className='inline-block pb-2'>Enter Your Email</label>
                <input 
                    type='email' 
                    className='w-full border-[1px] p-1' 
                />
            </div>
            
            <div className='mb-5'>
                <label className='inline-block pb-2'>Phone Number</label>
                <input 
                    type='number' 
                    className='w-full border-[1px] p-1' 
                />
            </div>

            <div className='mb-5'>
                <label className='inline-block pb-2'>Message</label>
                <textarea 
                    className='w-full border-[1px] p-1' 
                />
            </div>

            <div className='w-[11rem]'>
                <Button label={"SEND A MESSAGE"}/>
            </div>            
        </form>  
    </div>    
  )
}

export default ContactUsForm