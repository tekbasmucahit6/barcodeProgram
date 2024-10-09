import React, { useEffect, useState } from 'react'

function Content({Content}) {
  // ! örnek bir fetch scripti
    // const [data,setData] = useState({})
    // useEffect(() => {
    //   fetch("http://localhost:5000/").then(res => res.json()).then(data => setData(data))
    // },[])
    // console.log(data)
  // ! script bitişi
  return (
    <div>
      {Content}
    </div>
  )
}

export default Content