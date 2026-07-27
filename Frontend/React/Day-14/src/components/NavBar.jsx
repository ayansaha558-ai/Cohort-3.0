import React, { useState } from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex justify-between items-center px-6 py-4 max-w-7xl mx-auto'>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
          S
        </div>
        <h1 className='text-2xl font-bold tracking-tight'>
          <span className="text-amber-400">Shop</span>
          <span className="text-slate-200">Verse</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className="options flex gap-8 text-sm font-medium">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
        </div>
        
        <button className='bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95'>
          Create product
        </button>
      </div>

      
    </nav>
  )
}

export default NavBar