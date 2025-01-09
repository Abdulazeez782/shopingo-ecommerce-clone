import React from 'react'

const AccountAddress = ({activeSection}) => {
  return (
    <article
        className={`${(activeSection === "Addresses" ? "block" : "hidden")}`}
    >
        <h1 className='mb-4'>The following addresses will be used on the checkout page by default.</h1>
        <div className='flex justify-between items-center gap-2'>
            <div>
                <h1 className='font-bold text-xl'>Billing Address</h1>
                <p>Oludare Abdulazeez</p>
                <p>12, Sango street</p>
                <p>Ibadan, Oyo State</p>
                <p>20021</p>
                <p>Nigeria</p>
            </div>
            <div>
            <h1 className='font-bold text-xl'>Shipping Address</h1>
                <p>Oludare Abdulazeez</p>
                <p>12, Sango street</p>
                <p>Ibadan, Oyo State</p>
                <p>20021</p>
                <p>Nigeria</p>
            </div>
        </div>
    </article>
  )
}

export default AccountAddress