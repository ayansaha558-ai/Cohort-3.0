import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const NavBar = () => {

  let {setToggle}=useContext(MyStore);
  
  return (
    <div className="flex items-center justify-between px-8 py-5 bg-slate-950 border-b border-slate-800/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg" />
        <span className="text-lg font-bold text-white tracking-tight">Lumina</span>
      </div>

      <div className="flex items-center gap-8">
        <span onClick={()=>setToggle(true)} className="text-sm font-medium text-white border-b-2 border-violet-500 pb-1">Home</span>
        <span onClick={()=>setToggle(false)} className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">Cart</span>
      </div>

      <button className="px-5 py-2.5 bg-white text-slate-950 text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors">
        Create Product
      </button>
    </div>
  )
}

export default NavBar