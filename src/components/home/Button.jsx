import React from 'react'

const Button = ({text,gradient}) => {
  return (
    <div className={`${gradient} max-w-[300px] cursor-pointer flex gap-4 items-center p-3 text-lg font-medium rounded-md justify-center`}>
        {text}
        <img src='/arrow-right.svg' alt="arrow-right" className='w-5' />    
    </div>
  )
}

export default Button