import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./product.css"

function Product(props) {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100').then((res) => {
            setData(res.data.products)
            console.log(res.data.products);
        })
    }, [])
    return (
      <div className='main'>
            {
                data.map((item) => {
                    return(
                    <div className="product-card">
                        <img src={item.images[0]} alt="" />
                        <h4>{item.title}</h4>
                        {/* <p>{item.description}</p> */}
                        <div>
                            <span>${item.price}</span>
                            <button onClick={()=>props.addprod(item)}>+</button>
                        </div>
                    </div>)

                })
            }
      </div>
    )
}

export default Product