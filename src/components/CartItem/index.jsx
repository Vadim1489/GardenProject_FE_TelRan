import React from 'react';
import s from './index.module.css';
import { domen } from '../../domen';

export default function CartItem({id, title, price, image, count}) {
  return (
    <div className={s.card}>
        <img src={`${domen}${image}`} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}