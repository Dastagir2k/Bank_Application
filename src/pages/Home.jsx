import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AccountFeatures from '../components/AccountFeatures'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CheckBalance from './Chack_balance'
import Transfer_Money from './Transfer_Money'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <AccountFeatures/>
        <Footer/>
      
    </div>
  )
}

export default Home