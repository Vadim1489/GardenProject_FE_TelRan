import React from 'react';
import CartItem from '../CartItem';
import s from './index.module.css';


export default function CartContainer({cartState}) {
  console.log(cartState);
  return (
    <div className={s.container}>
        {
            cartState.map(el => <CartItem {...el} key={el.id} />)
        }
      
    </div>
  )
}