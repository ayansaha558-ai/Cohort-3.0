import React, { useState } from 'react'

const Count = () => {
    let [count,setCount]=useState(0);
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Click Me</button>
    </div>
  )
}

export default Count
