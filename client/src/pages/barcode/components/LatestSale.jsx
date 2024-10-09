import React from 'react'
import ProductListItem from './ProductListItem'

function LatestSale() {
  return (
    <div className='bg-white border border-black xl:w-6/12 lg:w-6/12 pb-3 rounded m-5'>
        <h1 className='flex justify-center items-center bg-gray-400 text-white p-2'>SATIŞ GEÇMİŞİ</h1>
        <table className='table-fixed w-full text-center mt-5'>
            <thead>
                <tr className=''>
                    <th>satış id</th>
                    <th>satış tutarı</th>
                    <th>satış tarihi</th>
                    <th>kasiyer</th>
                    <th>durum</th>
                </tr>
            </thead>
            <tbody>
                {/* satış geçmişi api üzerinden çekilip buraya map edilecek */}
                <ProductListItem />
                <ProductListItem />
            </tbody>
        </table>
    </div>
  )
}

export default LatestSale