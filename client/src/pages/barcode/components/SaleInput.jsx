import React from 'react'

function SaleInput() {
  return (
    <div>
        <form action="" method="get">
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center p-5 w-screen gap-5'>
                <input type="text" className='w-60 xl:w-96 lg:w-96 md:w-80 border p-2 rounded shadow-lg' placeholder='barkod & ürün ismi' />
                <button className='bg-green-600 px-3 py-2 rounded text-white shadow-xl hover:bg-green-700'>ürün ara</button>
            </div>
        </form>
    </div>
  )
}

export default SaleInput