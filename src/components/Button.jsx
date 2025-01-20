import React from 'react'

const Button = ({label, onClick, bgColor, textColor, borderColor}) => {
  return (
    <button 
        onClick={onClick}
        className={`w-[100%] px-4 py-2 border ${bgColor ? `${bgColor} ${textColor} ${borderColor} hover:bg-black hover:text-white` : "bg-black text-white hover:bg-gray-700"}`}
    >
      {label}
    </button>
  )
}

export default Button