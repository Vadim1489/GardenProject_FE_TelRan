import React from 'react'
import NavMenu from '../NavMenu'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Header() {
  return (
    <header className={s.header}>
        <Link to='/'>LOGO</Link>
        <NavMenu />
    </header>
  )
}