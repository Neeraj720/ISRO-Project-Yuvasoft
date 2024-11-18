import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Spacecrafts from './Pages/Spacecrafts'
import Centres from './Pages/Centres'
import Launchers from './Pages/Launchers'
import CustomerSatellites from './Pages/CustomerSatellites'
import Footer from './Components/Footer/Footer'
import View from './Pages/View'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/spacecrafts' element={<Spacecrafts/>} />
        <Route path='/centers' element={<Centres/>} />
        <Route path='/launchers' element={<Launchers/>} />
        <Route path='/customer-satellites' element={<CustomerSatellites/>} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}
 
export default App