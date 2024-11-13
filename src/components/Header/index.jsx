import React, { useContext } from 'react'
import NavMenu from '../NavMenu';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import logo from './media/logo.png';
import Cart from './media/cart.png';
import { useSelector } from 'react-redux';
import { IoMdMenu } from "react-icons/io";
import { Context } from '../../context';




export default function Header() {

  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  const { openMenu } = useContext(Context);

  return (
    <header className={s.header}>
        <Link to='/' className={s.logo}> <img src={logo} alt="Logo" /></Link>
        <NavMenu />
        <div className={s.cart_menu}>
        <Link to='/cart' className={s.cart}><img src={Cart} alt="Cart" />
        {
            cartState.length === 0
            ? ''
            : <span>{ totalCount }</span>
          }
        </Link>
        <IoMdMenu onClick={openMenu} />
        </div>
    </header>
  )
}