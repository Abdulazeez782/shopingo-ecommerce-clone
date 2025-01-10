import React, { useEffect, useState } from 'react'
import { cartIcon, closeIcon, hamburgerIcon, logo } from '../assets/icons'
import { favoriteIcon, menuImg, profileIcon } from '../assets/images'
import { navLinks } from '../constants'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenu(true);
            } else {
                setMobileMenu(false);
            }
        };
    
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => { 
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const handleMenuOpen = () => {
        setMobileMenu(true);
        console.log(mobileMenu);        
    }
    
    const handleMenuClose = () => {
        setMobileMenu(false);
    }
    const handleToggle = (index) => {
        console.log("clicked");
        
        setActiveLink(activeLink === index ? null : index);
        console.log(activeLink);        
    }
  return (
    <nav className='relative'>  
        <div className='bg-yellow-400 relative padding-x lg:padding-x-desktop py-4'>                
            <div className='flex justify-between items-center gap-2 mb-6'>                    
                <div className='flex'>
                    <img 
                        width={30} 
                        height={30} 
                        src={hamburgerIcon} 
                        className='mr-3 lg:hidden'
                        onClick={handleMenuOpen}
                    />
                    <a href='/'><img width={100} height={80} src={logo}/></a>
                </div>

                <div className='flex'>            
                    <img width={30} height={30} src={cartIcon} className='mr-3'/>
                    <Link to='/profile'>
                        <img width={30} height={30} src={profileIcon} className='mr-3'/>
                    </Link>                    
                    <img width={30} height={30} src={favoriteIcon}/>
                </div>    
            </div>       

            <div className='flex lg:w-2/3 lg:absolute top-1/2 left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]'>
                <input type='text' placeholder='search for products' className='w-full px-4 border-black border-2'/>
                <button className='bg-black text-white p-3'>SEARCH</button>
            </div> 
        </div>  

        <AnimatePresence>
            {mobileMenu && (
                <motion.nav
                    initial={{x: -500}}
                    animate={{x: 0}}
                    exit={{x: -500}} 
                    transition={{duration: 0.5}}       
                    className={`bg-white w-[60%] z-[999] fixed top-0 h-full ${mobileMenu ? "block" : "hidden"} lg:flex lg:static lg:w-full`}>
                    <div className='flex justify-between items-center p-2 border-b-2 border-black lg:border-none'>
                        <img width={100} height={80} src={logo} className='lg:hidden'/> 
                        <img 
                            width={40} 
                            height={40} 
                            src={closeIcon}
                            onClick={handleMenuClose}
                            className='lg:hidden cursor-pointer'
                        />
                    </div>
                            
                    {navLinks.map((nav, index) => (
                        <div 
                            key={index} 
                            onMouseEnter={() => {                                
                            if(window.innerWidth >= 1024) {                          
                                setActiveLink(index)                                
                            }
                            }}
                            onMouseLeave={() => {
                                if(window.innerWidth >=1024) {
                                   setActiveLink(null) 
                                }
                            }}
                            onClick={() => window.innerWidth <= 1024 && handleToggle(index)}
                            className={`p-4 border-b-[1px] border-black lg:border-none ${activeLink === index ? "lg:relative" : ""} cursor-pointer hover:bg-gray-100 text-[16px] font-semibold`}
                        >
                            <Link 
                                to={nav.href}
                                className='block lg:inline-block'                      
                            >
                                {nav.label}
                            </Link>

                            {/* submenu */}
                            {nav.secondaryLinks.length > 0 && (
                                <div 
                                    className={`${activeLink === index ? "block" : "hidden"} lg:min-w-[35rem] lg:w-auto bg-white mt-2 lg:mt-0 lg:absolute lg:top-full lg:left-0 z-[999] shadow-lg`}
                                >
                                    {Array.isArray(nav.secondaryLinks[0]) ? (
                                        <div className='flex flex-row-reverse gap-3'>
                                            <img src={menuImg} alt='menu-image' width={220} className='hidden lg:block'/> 
                                            {nav.secondaryLinks[0].map((subLink, subIndex) => (
                                                <div 
                                                    className='p-2'
                                                    key={subIndex}
                                                >
                                                    <h3 className='pl-2 pb-4'>{subLink.label}</h3>                                    
                                                    {subLink.links.map((link, index) => (
                                                        <a 
                                                            key={index}
                                                            href={subLink.href}
                                                            className='inline-block p-2 hover:bg-slate-200 border-b border-gray-200'
                                                        >
                                                            {link.label}
                                                        </a>  
                                                    ))}
                                                                                        
                                                </div>                               
                                        ))}
                                        </div>
                                    ) :  (
                                        // single list of secondary links
                                        <div>
                                            {
                                                nav.secondaryLinks.map((link, index) => (
                                                    <a 
                                                        href='link.href'
                                                        key={index}
                                                        className='inline-block w-full p-2 hover:bg-slate-200 border-b border-gray-200'
                                                    >
                                                        {link.label}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    )}
                                    
                                </div>
                            )}
                            
                        </div>
                    ))            
                    }
                </motion.nav> 
            )}             
        </AnimatePresence>
        
    </nav>
  )
}

export default Nav