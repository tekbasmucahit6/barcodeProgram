import React from 'react'

// ! api üzerinden gelen veriler props olarak bu componente geçilecek
function ProductListItem() {
  return (
    <>
        <tr className='mt-5'>
            <td>örnek ürün</td>
            <td>örnek ürün</td>
            <td>örnek ürün</td>
            <td>örnek ürün</td>
            <td><button className='bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white shadow-lg'>çıkar</button></td>
        </tr>
    </>
  )
}

export default ProductListItem