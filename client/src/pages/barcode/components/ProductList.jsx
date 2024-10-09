import React from 'react'
import ProductListItem from './ProductListItem'

function ProductList() {
  return (
    <div className='bg-white border border-black xl:w-6/12 lg:w-6/12 pb-3 rounded m-5'>
        <h1 className='flex justify-center items-center bg-gray-400 text-white p-2'>SATIŞ LİSTESİ</h1>
        <table className='table-fixed w-full text-center mt-5'>
            <thead>
                <tr className=''>
                    <th>ürün resmi</th>
                    <th>ürün ismi</th>
                    <th>ürün fiyatı</th>
                    <th>ürün adedi</th>
                    <th>durum</th>
                </tr>
            </thead>
            <tbody>
                {/* anlık satış kısmında girilen barkoda ait veriler burada map edilecek */}
                <ProductListItem />
                <ProductListItem />
            </tbody>
        </table>
    </div>
  )
}

export default ProductList