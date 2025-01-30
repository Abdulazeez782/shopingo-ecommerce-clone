import React from 'react'
import PageHeader from '../components/PageHeader'

const BlogRead = () => {
  return (
    <section>
        <article className='mb-10'>
           <PageHeader  header={"Blog"} firstLink={"Home"} secondLink={"Blog"} activeLink={"Blog Posts"}/> 
        </article>
    </section>
  )
}

export default BlogRead