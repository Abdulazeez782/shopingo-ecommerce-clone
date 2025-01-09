import React, { useState } from 'react'
import Button from './Button'

const AccountInformation = ({activeSection}) => {
    const [formData, setFormdata] = useState({
        firstName: "Ajadi",
        lastName: "Oludare",
        email: "oludare@gmail.com",
        displayName: "Oludare Ajadi",
        currentPassword: "1234567890"
    })

  return (
    <article
        className={`${(activeSection === "Account Details" ? "block" : "hidden")}`}
    >
        <form>
            <div className='flex gap-1 w-full justify-between items-center mb-[20px]'>
                <div>
                    <label 
                        htmlFor='first-name'
                        className='text-gray-400'
                    >
                        First Name
                    </label>
                    <input 
                        type='text' 
                        name='first-name'
                        value={formData.firstName}
                        onChange=""    
                        className='w-full border-[1px] p-1'                 
                    />
                </div>
                
                <div>
                    <label 
                        htmlFor='last-name'
                        className='text-gray-400'
                    >
                        Last Name
                    </label>
                    <input 
                        type='text' 
                        name='last-name'
                        value={formData.lastName}
                        onChange=""  
                        className='w-full border-[1px] p-1'                   
                    />
                </div>  
            </div>

           
            <div className='mb-[20px]'>
                <label 
                    htmlFor='display-name'
                    className='text-gray-400'
                >
                    Display Name
                </label>
                <input 
                    type='text' 
                    name='display-name'
                    value={formData.displayName}
                    onChange=""  
                    className='w-full border-[1px] p-1'                   
                />
            </div>
            <div className='mb-[20px]'>
                <label 
                    htmlFor='email-address'
                    className='text-gray-400'
                >
                    Email Address
                </label>
                <input 
                    type='email' 
                    name='email-address'
                    value={formData.email}
                    onChange=""   
                    className='w-full border-[1px] p-1'                  
                />
            </div>
            <div className='mb-[20px]'>
                <label 
                    htmlFor='current-password'
                    className='text-gray-400'
                >
                    Current Password
                </label>
                <input 
                    type='password' 
                    name='current-password'
                    value={formData.currentPassword}
                    onChange=""   
                    className='w-full border-[1px] p-1'                  
                />
            </div>     
            <div className='mb-[20px]'>
                <label 
                    htmlFor='new-password'
                    className='text-gray-400'
                >
                    New Password
                </label>
                <input 
                    type='password' 
                    name='new-password'
                    value=""
                    onChange="" 
                    className='w-full border-[1px] p-1'                    
                />
            </div>
            <div className='mb-[20px]'>
                <label 
                    htmlFor='confirm-new-password'
                    className='text-gray-400'
                >
                    Confirm New Password
                </label>
                <input 
                    type='password' 
                    name='confirm-new-password'
                    value=""
                    onChange=""      
                    className='w-full border-[1px] p-1'               
                />
            </div> 
            <div className='w-[10rem]'>
                <Button label={"Save Changes"} />    
            </div>
                            
        </form>
    </article>
  )
}

export default AccountInformation
