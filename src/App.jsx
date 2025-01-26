import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CheckBalance from './pages/Chack_balance'
import TransferMoney from './pages/Transfer_Money'
import Savings from './pages/Savings'


const App = () => {
  return (
    <div >
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/balance' element={<CheckBalance/>}/>
        <Route path='/transfer' element={<TransferMoney/>}/>
        <Route path='/savings' element={<Savings/>}/>

      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App