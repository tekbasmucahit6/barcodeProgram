import React from 'react'
import SaleInput from './components/SaleInput'
import ProductList from './components/ProductList'
import LatestSale from './components/LatestSale'

function Content() {
  return (
    <div className='grid grid-rows'>
        <div className='flex justify-center items-center'>
            <SaleInput />
        </div>
        <div className='flex flex-col xl:flex-row lg:flex-row justify-start items-center '>
            <ProductList />
            <LatestSale />
        </div>
    </div>
  )
}

export default Content