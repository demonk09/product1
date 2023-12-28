import React, { useState } from 'react'

function Condred() {
    let [f,setF]=useState(true)
    if (f) {
        return(
            <div>
            <h1> <span style={{ color: 'red' }}><i class="fa-solid fa-heart"></i></span> Sumit likes Kongara rice <span style={{ color: 'red' }}><i class="fa-solid fa-heart"></i></span></h1>
             <button onClick={()=>setF(false)}>Set false</button>   
            </div>
            )
    }
    else{
        return(
            <div>
               <h1>  <span style={{ color: 'red' }}><i class="fa-solid fa-people-roof"></i></span> Sumit likes Kongara rice <span style={{ color: 'red' }}><i class="fa-solid fa-people-roof"></i></span> </h1>
             <button onClick={()=>setF(true)}>Set True</button>   
            </div>
        )
    }
  return (
    <div>Condred</div>
  )
}

export default Condred