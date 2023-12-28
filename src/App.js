import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import Cart from './Components/Cart'
import Product from './Components/Product'
import Useref from './Components/Useref'
import Usereducer from './Components/Usereducer'
import Batchprocess from './Components/Batchprocess'
import Condred from './Components/Condred'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  let[cart,setCart]=useState([])
  let[ctotal,setcTotal]=useState(0)
  let addprod=(item)=>{

    let x= cart.filter((prod,index)=>{
      if (item.id ==prod.id) {
        incqty(index)
        return true
      }
      else{
        return false
      }
    })
    if (x.length==0) {
      setCart([...cart,{...item,'qty':1,"total":item.price}])
      setcTotal(ctotal+item.price)
    }
  }
  let incqty=(index)=>{
    if (cart[index].qty<5) {
      cart[index].total+=cart[index].price
      setcTotal((ctotal+cart[index].price))
      setCart([...cart])
    }
   
  }
  let decqty=(index)=>{
    if (cart[index].qty>1) {
      cart[index].qty--;
      cart[index].total=cart[index].price
      setcTotal(ctotal-cart[index].price)
      setCart([...cart])
    }
  }
  let del=(index)=>{
    setcTotal(ctotal-cart[index].total)
    cart.splice(index,1)
    setCart([...cart])
  }

  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path='/' element={<Product addprod={addprod}/>}/>
          <Route path='/cart' element={<Cart data={cart} incqty={incqty}
          decqty={decqty} del={del} ctotal={ctotal}/>}/>
           <Route path='/Useref' element={<Useref/>}/>
           <Route path='/Usered' element={<Usereducer/>}/>
           <Route path='/Batch' element={<Batchprocess/>}/>
           <Route path='/cond' element={<Condred/>}/>
        </Routes>
       
    </BrowserRouter>
  )
}

export default App