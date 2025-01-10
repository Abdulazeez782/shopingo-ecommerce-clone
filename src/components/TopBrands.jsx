import React from 'react'

const TopBrands = ({imgUrl}) => {
  return (
    <div>
        <img src={imgUrl} alt='top-brand-image' width={200} height={200}/>
    </div>
  )
}

export default TopBrands