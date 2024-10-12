import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import Cart from './media/cart.png'

export default function NavMenu() {
  return (
    <div>
      <nav className={s.nav_menu}>
        <Link to='/'>MainPage</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/all_products'>All products</Link>
        <Link to='/cart'><img src={Cart} alt="Cart" /></Link>
        
      </nav>
        
    </div>
  )
}