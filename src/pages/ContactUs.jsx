import React from 'react'
import PageHeader from '../components/PageHeader'
import MapComponent from '../components/MapComponent'
import ContactUsForm from '../components/ContactUsForm'
import ContactAddress from '../components/ContactAddress'

const ContactUs = () => {
  return (
    <section>
        <article className='mb-10'>
           <PageHeader header={"Contact Us"} firstLink={"Home"} secondLink={"Pages"} activeLink={"Contact Us"}/> 
        </article>

        <article className='sections-margin-x'>
            <MapComponent />
        </article>

        <article className='sections-margin-x flex flex-col lg:flex-row gap-4'>
            <div className='w-[70%]'>
                <ContactUsForm />
            </div>
            
            <div className='w-[30%]'>
                <ContactAddress />
            </div>
        </article>
    </section>
  )
}

export default ContactUs