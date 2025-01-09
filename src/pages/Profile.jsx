import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import AccountProfile from '../components/AccountProfile'
import AccountOrders from '../components/AccountOrders';
import AccountAddress from '../components/AccountAddress';
import AccountPayments from '../components/AccountPayments';
import AccountInformation from '../components/AccountInformation';

const Profile = () => {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const handleClick = (label) => {
        setActiveSection(label);
        console.log(activeSection);        
    }
  return (
    <>
        <div className='flex justify-between items-center mt-10 bg-gray-100 border-y-2 border-gray-300 px-[8rem] py-4'>
            <h1 className='text-xl font-bold'>My Profile</h1>
            <div className='flex gap-3'>
                <a className='text-xl font-semibold after:content-[">"] after:pl-3'>Home</a>
                <a className='text-xl font-semibold after:content-[">"] after:pl-3'>Account</a>
                <a className='text-xl font-semibold text-gray-400'>Dashboard</a>
            </div>
        </div>

        <div className='bg-white shadow mt-5 mx-[8rem] p-3 flex flex-col lg:flex-row gap-[3rem]'>
            <div className='w-full lg:w-[30%]'>
                <Dashboard handleClick={handleClick} activeSection={activeSection}/>
            </div>

            <div className='w-full lg:w-[70%]'>
                <AccountProfile activeSection={activeSection}/>
                <AccountOrders activeSection={activeSection}/>
                <AccountAddress activeSection={activeSection}/>
                <AccountPayments activeSection={activeSection}/>
                <AccountInformation activeSection={activeSection}/>
            </div>
        </div>
    </>
  )
}
export default Profile