import React from 'react'
import { AccountLinks } from '../constants'

const Dashboard = ({handleClick, activeSection}) => {
  return (
    <article className='flex flex-col border-[1px] border-gray-300 p-2'>
        {AccountLinks.map((link, index) => (
            <div
                key={index}
                className={`flex items-center justify-between border-b p-2 border-gray-200 cursor-pointer hover:text-blue-700 ${(activeSection === link.label) ? "bg-black text-white" : ""}`}
                onClick={() => handleClick(link.label)}
            >
                <h1 className='text-l font-semibold'>{link.label}</h1>
                <img src={link.imgurl} alt='' width={30} height={30}/>
            </div>
        ))}
        
    </article>
  )
}

export default Dashboard