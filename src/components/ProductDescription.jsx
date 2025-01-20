import React from 'react'

const ProductDescription = ({activePage}) => {
  return (
    <article className={`text-gray-500 ${(activePage === "description") ? "block" : "hidden"}`}>
        <p className='mb-5'>
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.
        </p>

        <ol className='list-disc ml-10 mb-5'>
            <li>Not just for commute</li>
            <li>Branded tongue and cuff</li>
            <li>Super fast and amazing</li>
            <li>Lorem sed do eiusmod 0</li>
        </ol>

        <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.</p>
        <p>Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
    </article>
  )
}

export default ProductDescription