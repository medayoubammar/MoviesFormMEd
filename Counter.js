import React, { useState } from 'react'


export default function Counter() {
 const [counter,setCounter] = useState(0)
  return (
    <div className='container m-5'>

        <p className='text-primary'>{counter}</p>
        <button className='btn btn-danger' onClick={() => setCounter(counter+1)}>+1</button>

    </div>
  )
}
