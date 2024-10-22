import React from 'react';
import s from './index.module.css';

export default function CartItem({id, title, price, image, count}) {
  return (
    <div className={s.card}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}