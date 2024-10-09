import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom"
import NavbarItem from './NavbarItem';
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
    <div className='grid grid-cols-3 grid-rows-none w-full xl:flex xl:flex-col xl:gap-5 xl:w-auto lg:flex lg:flex-col lg:w-auto lg:gap-5 md:flex md:flex-col md:w-auto md:gap-5 bg-slate-800 xl:bg-transparent lg:bg-transparent md:bg-transparent pt-5 pb-5 fixed bottom-0 xl:bottom-16 lg:bottom-16 md:bottom-16 px-3' id='menu'>
        <div>
            <Link to={"/"} >
                <NavbarItem icon={<IoMdHome className='text-xl'/>} title={"Anasayfa"} />
            </Link>
        </div>
        <div>
            <Link to={"/"}>
                <NavbarItem icon={<MdSpaceDashboard className='text-xl'/>} title={"Dashboard"} />
            </Link>
        </div>
        <div>
            <Link to={"/"}>
                <NavbarItem icon={<FaAddressBook className='text-xl'/>} title={"Veresiye"}/>
            </Link>
        </div>
        <div>
            <Link to={"/sales"}>
                <NavbarItem icon={<SiSimpleanalytics className='text-xl'/>} title={"Satış"} />
            </Link>
        </div>
        <div>
            <Link to={"/"}>
            <NavbarItem icon={<AiOutlineProduct className='text-xl'/>} title={"Ürün"} />
            </Link>
        </div>
    </div>:
    <div></div>
    }

    <div className='flex justify-center items-center fixed bottom-52 left-2 xl:bottom-5 xl:left-3 lg:bottom-4 lg:left-3 md:bottom-4 md:left-3'>
        <button className='flex justify-center items-center rounded-full bg-slate-200 border-2 border-black shadow-xl text-blue-950 hover:text-white hover:bg-blue-950 p-3 hover:cursor-pointer transition-all' id='menu-close' onClick={e => menuSwitch()}>
        {
            menuStatus?<IoMdClose className='text-2xl' />:<IoMdMenu className='text-2xl' />
        }
        </button>
    </div>
    
    </>
  )
}

export default Navbar