import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import { IoMdClose } from "react-icons/io";
import { Context } from '../../context';


export default function NavMenu() {

  const { closeMenu, menuActive } = useContext(Context);


  return (
    <div>
      <nav className={[s.nav_menu, menuActive ? s.active : '' ].join(' ')} >
        <Link to='/'>Main Page</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/all_products'>All products</Link>
        <Link to='/all_sales'>All sales</Link>
        <IoMdClose onClick={closeMenu} />
      </nav>
        
    </div>
  )
}