import React from 'react'
import { contactInfo } from '../constants'

const ContactAddress = () => {
  return (
    <div className='bg-gray-100 p-2'>
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
  )
}

export default ContactAddress