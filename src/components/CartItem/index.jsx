import React from 'react';
import s from './index.module.css';
import { domen } from '../../domen';
import { useDispatch } from 'react-redux';
import {decrementCountAction, incrementCountAction, deleteProductFromCartAction} from '../../store/reducers/cartReducer';
import { RxCross2 } from "react-icons/rx";

export default function CartItem({id, title, price, image, count, discont_price}) {

  const dispatch = useDispatch();
  // const totalPrice = price * count;
  const percentDiscount = Math.round((price - discont_price) / price * 100);

  return (
    <div className={s.card}>
      <div>
        <img src={`${domen}${image}`} alt={title}/>
      </div>
      <div className={s.test}>
        <p className={s.title}>{title}</p>
        <RxCross2 onClick={() =>dispatch(deleteProductFromCartAction(id))}/>
          <div className={s.test1}>
            <div className={s.add_cart_count}>
              <div className={s.decr_count} onClick={() => dispatch(decrementCountAction(id))}>-</div>
              <div className={s.count}> { count } </div>
              <div className={s.incr_count} onClick={() => dispatch(incrementCountAction(id))}>+</div>
            </div>
            <div>
              {
                percentDiscount !== 100
                ? (<div className={s.price_block}>
                    <p className={s.discont_price}>${20}</p>
                    <p className={s.price}>${price}</p>
                    </div>)
                : (<p className={s.price_without_discont}>${price}</p>)
              }
              {/* <p className={s.total_price}>${Number.isInteger(totalPrice) 
                ? totalPrice
                : totalPrice.toFixed(2)}
              </p> */}
            </div>
          </div>
      </div>
    </div>

   
  )
}







{/* <div className={s.card}>
<div><img src={`${domen}${image}`} alt={title}/></div>
<div className={s.test}>
  <div className={s.title}><p>{title}</p></div>
  <div><p>${Number.isInteger(totalPrice) // проверка на целое число
  ? totalPrice
  : totalPrice.toFixed(2)}
  </p>
  <div className={s.add_cart_count}>
  <div className={s.decr_count} onClick={() => dispatch(decrementCountAction(id))}>-</div>
  <div className={s.count}> { count } </div>
  <div className={s.incr_count} onClick={() => dispatch(incrementCountAction(id))}>+</div>
  </div>
  </div>
</div>
<RxCross2 onClick={() =>dispatch(deleteProductFromCartAction(id))}/>

</div> */}