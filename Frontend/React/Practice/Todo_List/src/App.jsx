import React from 'react'
import Tasks from './assets/Components/Tasks'
import Inputs from './assets/Components/Inputs'
import { useState } from 'react'

const App = () => {

  const [formData, setformData] = useState({});

  return (
    <div className='flex flex-col items-center w-screen h-screen p-10 bg-black text-white'>
      <h1 className="text-4xl font-extrabold text-zinc-100 tracking-widest uppercase">
        TODO-LIST
      </h1>
      <Inputs formData={formData} setformData={setformData}/>
      <Tasks formData={formData}/>
    </div>
  )
}

export default App