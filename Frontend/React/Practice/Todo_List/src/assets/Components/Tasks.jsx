import React from 'react'
import Inputs from './Inputs'
const Tasks = ({formData}) => {
  return (
    <div className='task-area w-full flex items-center flex-col py-3'>
        <div className="task-box w-[40%] flex justify-between items-center p-4 bg-violet-600 text-white rounded-3xl">
            <div className="task-text text-slate-100 font-semibold text-lg tracking-wide ">
                <h5>{formData.task}</h5>
                <p className='bg-blue-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide'>{formData.category}</p>
            </div>
            <div className="buttons">
                <button className='px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-red-500/40'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Tasks