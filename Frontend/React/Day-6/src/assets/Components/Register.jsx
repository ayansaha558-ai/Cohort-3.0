import React, { useState } from 'react'
import Dashboard from './Dashboard';

const Register = ({setFormData,formData,setusers}) => {

    let handleSubmit=(dets)=>{
        dets.preventDefault();

        setusers(prev=>[...prev,formData]);

        setFormData({
            name:"",
            email:"",
            password:"",
            url:""
        })
    }

    let handleChange=(dets)=>{
        setFormData({...formData,[dets.target.name]:dets.target.value})
        console.log(dets.target.value);
        
    }

  return (
    <div>
        <div className="inp-box flex flex-col justify-center items-center bg-gray-300 w-screen h-screen">
            <form action="" onSubmit={handleSubmit} className='flex flex-col p-6 px-8 bg-white border border-gray-200 rounded-xl shadow-md bg-white gap-6'>
                <h5 className='text-center font-medium text-base'>Register Account</h5>

                <input type="text" name="name" onChange={handleChange} className='w-70 border border-gray-300 p-2 text-sm' id="name" placeholder='Name' />

                 
                <input type="email" name="email" onChange={handleChange} className='border border-gray-300 p-2 text-sm' id="email" placeholder='Email' />
                <input type="url" name="url" onChange={handleChange} className='border border-gray-300 p-2 text-sm' id="url" placeholder='Image Url..' />

                <input type="password" onChange={handleChange}  className='border border-gray-300 p-2 text-sm' name="password" id="password" placeholder='Password' />
                <button type="submit"  className="bg-blue-500 w-40 rounded ml-14 text-white">Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register