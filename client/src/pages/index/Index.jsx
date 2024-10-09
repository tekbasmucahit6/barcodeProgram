import React from 'react'
import Layout from '../../layouts/Layout'
import Content from './Content'
function Index() {
  return (
    <div>
      <Layout content={<Content />} /> 
    </div>
  )
}

export default Index