import React from 'react'
import NavMenu from '../NavMenu';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import logo from './media/logo.png';



export default function Header() {
  return (
    <header className={s.header}>
        <Link to='/' className={s.logo}> <img src={logo} alt="Logo" /></Link>
        <NavMenu />
    </header>
  )
}