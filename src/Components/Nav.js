import React from 'react'
import {Link } from 'react-router-dom'
import "./../App.css"


function Nav() {
  return (
    <nav>
        <Link to='/'>Products</Link>
        <Link to='/cart'>carts</Link>
        <Link to='/Useref'>Useref</Link>
        <Link to='/Usered'>UseReducer</Link>
        <Link to='/Batch'>Batchprocess</Link>
        <Link to='/cond'>Condentional</Link>

    </nav>
  )
}

export default Nav