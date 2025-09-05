import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='w-[100vw] bg-blue-500 h-[70px] fixed top-0 p-[20px]'>
      <Link className='bg-[lightgray] p-1 rounded-[2px] m-[2%]' to="/">Home</Link> 
        <Link className='bg-[lightgray] p-1 rounded-[2px] m-[2%]' to="/add">Add</Link> 
        
    </nav>
  )
}

export default Navbar
