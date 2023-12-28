import React, { useRef, useState } from 'react'

function Useref() {
    let [data,setData]=useState("")
    let t1=useRef()
    let fun=()=>{
        setData(t1.current.value)
        t1.current.value=""
    }
  return (
    <div>
        
        <input type="text" name="" ref={t1} />
        <button onClick={fun}>GET DATA</button>
        <div>
            {data}
        </div>
    </div>
  )
}

export default Useref