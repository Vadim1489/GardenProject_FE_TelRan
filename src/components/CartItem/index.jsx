import React from 'react';
import s from './index.module.css';
import { domen } from '../../domen';
import { useDispatch } from 'react-redux';
import {decrementCountAction, incrementCountAction, deleteProductFromCartAction} from '../../store/reducers/cartReducer';
import { RxCross2 } from "react-icons/rx";

export default function CartItem({id, title, price, image, count}) {

  const dispatch = useDispatch();
  return (
    <div className={s.card}>
        <img src={`${domen}${image}`} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
        <div>
          <div onClick={() => dispatch(decrementCountAction(id))}>-</div>
        </div>
        <p>{ count }</p>
        <div onClick={() => dispatch(incrementCountAction(id))}>+</div>

        <RxCross2 onClick={() =>dispatch(deleteProductFromCartAction(id))}/>
    </div>
  )
}