import React, { useState } from 'react'

const Inputs = () => {

    const [formData, setFormData] = useState({});

    let handleChange=(dets)=>{
        
        setFormData({...formData,[dets.target.name]:[dets.target.value]})
        console.log(dets.target.value);
        
    };
    
    return (
    <div>
      <form action="" className='flex flex-col gap-3 w-70 p-10'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} className='border border-black p-1 rounded'/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} className='border border-black p-1 rounded'/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} className='border border-black p-1 rounded'/>
      </form>

      <div className='p-10 font-semibold text-lg'>
        <h2>Name - {formData.name}</h2>
        <h2>Email - {formData.email}</h2>
        <h3>Age - {formData.age}</h3>
      </div>
    </div>
  )
}

export default Inputs
