import React from 'react'

const Nav = ({setToggle}) => {
  return (
    <div className='nav-box w-full px-4 py-2 flex align-middle justify-between class="bg-slate-900/80 backdrop-blur-md border-b border-slate-800"'>
        <div>
            <img className='w-10' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        </div>
        <div className='mt-2 flex gap-5'> 
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
        </div>
        <div className='mt-1 bg-violet-600 hover:bg-violet-500 border border-violet-500 text-white px-3 py-1 rounded-xl transition-all duration-300'>
            <button onClick={()=>setToggle(prev=>!prev)}>Create User</button>
        </div>
    </div>
  )
}

export default Nav