import React from 'react'
import { MdAccountCircle } from "react-icons/md";
function Header() {
  return (
    <div className='flex justify-between items-center bg-blue-800 p-4 text-white'>
        <h1 className='text-2xl'>ESRA MARKET</h1>
        <MdAccountCircle className='text-white text-3xl hover:text-green-500 hover:cursor-pointer'/>
    </div>
  )
}

export default Header