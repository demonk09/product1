import React, { useReducer } from 'react'

function Usereducer() {
    let[state,dispatch]=useReducer((state,action)=>{
        if (action.type=='data') {
            return{...state,"data":action.payload}
        }
        else{
            return{'arr':[...state.arr,state.data],"data":""}
        }
    },{"data":"","arr":[]})
  return (
    <div>
        <input type="text" 
        onChange={(e)=>dispatch({"type":"data","payload":e.target.value})} value={state.data} />

        <button onClick={()=>dispatch({"action":"arr"})}>ADD</button>
        {
            state.arr.map((item)=><li style={{fontSize:'70px'}}>{item}</li>)
        }
    </div>
  )
}

export default Usereducer