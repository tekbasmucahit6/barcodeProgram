import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

function Layout({content}) {
  return (
    <div>
        <Header />
        <Navbar />
        <Content Content={content} /> 
    </div>
  )
}

export default Layout