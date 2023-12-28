import React from 'react'
import "./product.css"

function Cart(props) {
  return (<>
    {props.data.length==0 &&<div style={{'color':"red"}}>YOUR CART IS EMPTY </div>}
    {props.data.length>0 && <div>
        <div className='main'>
            {
                
                props.data.map((item,index) => {
                    return(
                    <div className="product-card">
                        <img src={item.images[0]} alt="" />
                        <h4>{item.title}</h4>
                        {/* <p>{item.description}</p> */}
                        <div>
                            <span>${item.price}</span>
                            <button onClick={()=>props.decqty(index)}>-</button>{item.qty}
                            <button onClick={()=>props.incqty(index)}>+</button>{item.qty}
                        </div>
                    </div>
                   
            
                    )

                })
               
            }
           
      </div>
        </div>}
    </>
  )
}

export default Cart