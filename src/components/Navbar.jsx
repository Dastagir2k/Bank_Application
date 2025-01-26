import React from 'react'
import { Menu } from "lucide-react"
const Navbar = () => {
  return (
    
    <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4  text-xl">
      <div className="flex justify-between items-center">
        <div href="/" className="text-2xl font-bold text-blue-600">
          Infinite Bank
        </div>
        <nav className="hidden md:flex space-x-8">
          <div href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </div>
          <div href="#account-access" className="text-gray-600 hover:text-blue-600">
            Account Access
          </div>
          <div href="#" className="text-gray-600 hover:text-blue-600">
            About Us
          </div>
          <div href="#" className="text-gray-600 hover:text-blue-600">
            Contact
          </div>
        </nav>
        <div className="hidden md:block">
          <button variant="outline" className='cursor-pointer hover:text-blue-600'>Online Banking</button>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  </header>
  )
}

export default Navbar