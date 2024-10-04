import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom"
function Navbar() {
   const [menuStatus,setMenuStatus] = useState(0) 
   const menuSwitch = () => {
    if(menuStatus == 0) setMenuStatus(1)
    else setMenuStatus(0)
   }
  return (
    <>
   { 
    menuStatus?
    <div className='flex justify-center items-center fixed bottom-0 left-0 w-full bg-blue-800  
    xl:left-0 xl:top-16 xl:flex-col xl:w-auto 
    lg:left-0 lg:top-16 lg:flex-col lg:w-auto
    md:left-0 md:top-16 md:flex-col md:w-auto
    gap-5 pt-5 pb-5 px-2' id='menu'>
        
            <Link to={"/"} >
                <div className='flex flex-col justify-center items-center text-white hover:text-amber-500 hover:cursor-pointer gap-3'>
                    <IoMdHome className='text-xl' />
                    <p>anasayfa</p>
                </div>
            </Link>
            <Link to={"/"}>
                <div className='flex flex-col justify-center items-center text-white hover:text-amber-500 hover:cursor-pointer gap-3'>
                    <MdSpaceDashboard className='text-xl ' />
                    <p>dashboard</p>
                </div>
            </Link>
            <Link to={"/"}>
                <div className='flex flex-col justify-center items-center text-white hover:text-amber-500 hover:cursor-pointer gap-3'>
                    <FaAddressBook className='text-xl ' />
                    <p>veresiye</p>
                </div>
            </Link>
            <Link to={"/sales"}>
                <div className='flex flex-col justify-center items-center text-white hover:text-amber-500 hover:cursor-pointer gap-3'>
                    <FcSalesPerformance className='text-xl ' />
                    <p>satış</p>
                </div>
            </Link>
            <Link to={"/"}>
                <div className='flex flex-col justify-center items-center text-white hover:text-amber-500 hover:cursor-pointer gap-3'>
                    <AiOutlineProduct className='text-xl ' />
                    <p>toptancı</p>
                </div>
            </Link>
    </div>:
    <div></div>
    }

    <div className='flex justify-center items-center fixed bottom-24 left-2 xl:bottom-5 xl:left-5 lg:bottom-5 lg:left-5'>
        <button className='flex justify-center items-center border rounded-full bg-blue-950 shadow-xl p-3 hover:cursor-pointer' id='menu-close' onClick={e => menuSwitch()}>
        {
            menuStatus?<IoMdClose className='text-3xl text-white' />:<IoMdMenu className='text-3xl text-white' />
        }
        </button>
    </div>
    
    </>
  )
}

export default Navbar