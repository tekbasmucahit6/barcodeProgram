import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

function Index() {
  return (
    <div>
        <Header />
        <div className='grid grid-cols-12'>
            <div className='col-span-1 mt-3'>
                <Navbar />
            </div>
            <div className='col-span-11 h-screen'>
                <Content />
            </div>
        </div>
    </div>
  )
}

export default Index