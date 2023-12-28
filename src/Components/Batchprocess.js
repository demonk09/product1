import React, { useState } from 'react'

function Batchprocess() {
    let[c,setC]=useState(0)
    let fun=()=>{
        setC((c)=>c+1)
        setC((c)=>c+1)
        setC((c)=>c+1)
        setC((c)=>c+1)
    }
  return (
    <div>
        <div>
            {c}
        </div>
        <button onClick={fun}>CLICK</button>
    </div>
  )
}

export default Batchprocess