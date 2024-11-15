import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { domen } from '../../domen';
import s from './index.module.css'
import { addProductToCartAction } from '../../store/reducers/cartReducer';
import ReadMore from '../ReadMore';

export default function SingleProductCard({id ,title, price, discont_price, description, image }) {

  let [ count, setCount ] = useState(1);

  const incrCount = () => setCount(++count);

  const decrCount = () => {
    if(count > 1) {
      setCount(--count)
    }
  };

  const dispatch = useDispatch();

    const singleProductState = useSelector(store => store.singleProduct);

    const percentDiscount = Math.round((price - discont_price) / price * 100);

  return (
    <div>
      {
        singleProductState.status === 'loading'
        ? <p>Product info is loading...</p>
        : <div className={s.single_product_block}>
            <div>
              <div className={s.single_product_image}>
                <img src={`${domen}${image}`} alt={title}/>
              </div>
            </div>
            <div className={s.single_product_content}>
                <h3>{title}</h3>
              <div  className={s.price_container}>
                {
                  percentDiscount !== 100
                  ? (<div className={s.price_block}>
                      <p className={s.discont_price}>${(discont_price * count).toFixed(2)}</p>
                      <p className={s.price}>${price}</p>
                    </div>)
                  : (<p className={s.price_without_discont}>${(price * count).toFixed(2)}</p>)
                }
                <div className={s.discont_percent_block}>
                  {
                    discont_price !== null
                    ? <p className={s.discont_percent}>-{Math.round(100 - (discont_price*100 / price))} %</p>
                    : null
                  }
                </div>

              </div>
              <div className={s.add_cart_block}>
                  <div className={s.add_cart_count}>
                    <div className={s.decr_count} onClick={decrCount}>-</div>
                    <div className={s.count}>{count}</div>
                    <div className={s.incr_count} onClick={incrCount}>+</div>
                  </div>
                  <div className={s.btn_add_cart} onClick={() => dispatch(addProductToCartAction({ id, image, title, price, discont_price, count }))}>
                    Add to cart
                  </div>
              </div>
              <div className={s.descr_block}>
                  <h5>Description</h5>
                 
                  <ReadMore description={description} maxLength={306} maxWidth="300px"/>
              </div>
            </div>
              
          </div>
      }
    </div>
  )
}
