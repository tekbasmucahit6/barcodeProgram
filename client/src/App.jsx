import React from "react"
import {
  BrowserRouter as Router,Routes,Route
}
from "react-router-dom"
import Index from "./pages/index/Index"
import Barcode from "./pages/barcode/Barcode"
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sales" element={<Barcode />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
