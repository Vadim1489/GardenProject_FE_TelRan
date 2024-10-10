import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div>
      <nav className={s.nav_menu}>
        <Link to='/'>MainPage</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/all_products'>All products</Link>
        <Link to='/cart'>Cart</Link>
        
      </nav>
        
    </div>
  )
}