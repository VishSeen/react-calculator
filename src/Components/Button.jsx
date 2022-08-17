import React from 'react'

const Button = ({ value, onClick, className }) => {
  return (
    <>
      <button className={`button__normal ${className}`} onClick={onClick}>
        {value}
      </button>
    </>
  )
}

export default Button;