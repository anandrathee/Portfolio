import React from 'react'

const Button = ({text, color}) => {
  return (
    <div>
     <a href="" className={`px-4 py-3 rounded ${color} text-sm`}>{text}</a>
    </div>
  )
}

export default Button