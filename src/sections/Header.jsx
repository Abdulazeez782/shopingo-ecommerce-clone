import React from 'react'
import { headerLinks, headerSocials } from '../constants'

const Header = () => {
  return (
    <header className='flex justify-between items-center padding-x lg:padding-x-desktop py-3'>
        <div className='flex'>
            <p className='mr-2 hidden md:block'>Welcome to our store!</p>
            <p>ENG</p> 
        </div>
        
        <div className='mr-10 hidden xl:block'>
            <ul className='flex'>
                {headerLinks.map((link) => (
                    <li key={link.label}><a href={link.href} className='pr-4'>{link.label}</a></li>
                ))}
            </ul>            
        </div>

        <div className='flex items-center'>
            {
                headerSocials.map((social, index) => (
                    <a key={index} href={social.href} className='pr-4'><img width={30} height={20} src={social.imgurl} alt={social.alt}/></a>
                ))
            }
        </div>
    </header>
  )
}

export default Header