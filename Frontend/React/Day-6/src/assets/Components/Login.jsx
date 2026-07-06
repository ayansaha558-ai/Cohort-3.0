import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div>
        <div className="inp-box flex flex-col justify-center items-center bg-gray-300 w-screen h-screen">
            <form action="" className='flex flex-col p-6 px-8 bg-white border border-gray-200 rounded-xl shadow-md bg-white gap-6'>
                <h5 className='text-center font-medium text-base'>Login Account</h5>               
                <input type="email" name="email" className='border border-gray-300 p-2 text-sm' id="email" placeholder='Email' />

                <input type="password" className='border border-gray-300 p-2 text-sm' name="password" id="password" placeholder='Password' />
                <button onClick={()=>setToggle(prev=>!prev)} className='bg-blue-500 w-40 rounded ml-2 text-white'>Login</button>
            </form>
            
        </div>
    </div>
  )
}

export default Login