import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const error = () => {
  return (
    <div className='error'> 
     Page not found. Click on the button below for Luciano's Website
   <Link to='/'> <button>Home</button> </Link> 
    </div>
  )
}

export default error
