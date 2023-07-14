import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-containder'>
           <Link to='/' className='navbar-logo'>
            TRYL 
           </Link>

           </div>


       
        </nav>
  )
}

export default Navbar