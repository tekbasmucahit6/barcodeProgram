import React from 'react'
function NavbarItem({icon,title}) {
  return (
    <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row text-white hover:text-amber-500 hover:cursor-pointer gap-2'>
        <div className='flex justify-center items-center xl:bg-blue-500 lg:bg-blue-500 md:bg-blue-500 rounded-full p-4'>
           {icon} 
        </div>
        <div className='flex justify-center items-center text-white'> 
            <p className='text-sm xl:border xl:bg-zinc-950 xl:px-2 xl:py-1 xl:rounded-tl-full xl:rounded-bl-full lg:border lg:bg-zinc-950 lg:px-2 lg:py-1 lg:rounded-tl-full lg:rounded-bl-full md:border md:bg-zinc-950 md:px-2 md:py-1 md:rounded-tl-full md:rounded-bl-full shadow-xl'>{title}</p>
        </div>
    </div>
  )
}

export default NavbarItem