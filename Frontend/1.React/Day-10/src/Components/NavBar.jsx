import React from 'react'
import { useState } from 'react'

const NavBar = ({setToggle}) => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="text-lg font-semibold text-slate-100 tracking-tight">
        Logo
      </div>

      <div className="flex items-center gap-6">
        <h5 onClick={()=>setToggle(prev=>false)} className="text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 cursor-pointer">
          Home
        </h5>
        <h5 onClick={()=>setToggle(prev=>true)} className="text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 cursor-pointer">
          Cart
        </h5>
      </div>

      <div>
        <button className="px-4 py-2 bg-slate-100 hover:bg-white text-slate-900 text-xs font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/50 cursor-pointer">
          Create Product
        </button>
      </div>
    </nav>
  )
}

export default NavBar