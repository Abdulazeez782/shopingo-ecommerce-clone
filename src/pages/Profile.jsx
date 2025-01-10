import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import AccountProfile from '../components/AccountProfile'
import AccountOrders from '../components/AccountOrders';
import AccountAddress from '../components/AccountAddress';
import AccountPayments from '../components/AccountPayments';
import AccountInformation from '../components/AccountInformation';
import PageHeader from '../components/PageHeader';

const Profile = () => {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const handleClick = (label) => {
        setActiveSection(label);
        console.log(activeSection);        
    }
  return (
    <>
        <div>
            <PageHeader header={"My Profile"} firstLink={"Home"} secondLink={"profile"} activeLink={"Dashboard"}/>  
        </div>

        <div className='bg-white shadow mt-5 sections-margin-x p-3 flex flex-col lg:flex-row gap-[3rem]'>
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