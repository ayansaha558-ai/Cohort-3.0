import React, { useState } from 'react';

const Inputs = ({formData,setformData}) => {

    let handleChange=(dets)=>{
        setformData({...formData,[dets.target.name]:dets.target.value});
    };
    console.log(formData.task);
    console.log(formData.category);

  return (
    <div className='w-screen flex justify-center mt-10'>

      <form className='flex items-end gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl'>

        <div className='flex flex-col gap-2'>
          <label
            htmlFor="name"
            className='text-zinc-300 text-sm font-medium tracking-wide'
          >
            Task Name
          </label>

          <input
            name="task"
            type="text"
            id="name"
            className='w-64 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label
            htmlFor="category"
            className='text-zinc-300 text-sm font-medium tracking-wide'
          >
            Category
          </label>

          <input
            type="text"
            name="category"
            id="category"
            onChange={handleChange}
            className='w-48 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all'
          />
        </div>

        <input
          type="submit"
          value="Add"
          className='px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold cursor-pointer transition-all duration-300 shadow-md hover:shadow-violet-500/40'
        />

      </form>

    </div>
  )
}

export default Inputs