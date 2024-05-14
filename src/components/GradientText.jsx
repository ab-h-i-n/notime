import React from 'react'

const GradientText = ({children ,className}) => {

  return (
    <span className={`bg-overlay bg-gradient-to-r from-green-400 to-yellow-500 ${className}`}>{children}</span>
  )
}

export default GradientText