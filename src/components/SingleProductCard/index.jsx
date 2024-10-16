import React from 'react'
import { useSelector } from 'react-redux';
import { domen } from '../../domen';
import s from './index.module.css'

export default function SingleProductCard({title, price, discont_price, description, image, count}) {

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
              <div>
                <h3>{title}</h3>
                {
                  percentDiscount !== 100
                  ? (<div className={s.price_block}>
                      <p className={s.discont_price}>${discont_price}</p>
                      <p className={s.price}>${price}</p>
                    </div>)
                  : (null)
                }
              </div>
              <div className={s.add_cart_block}>
                  <div className={s.add_cart_count}>
                    <div className={s.decr_count}>-</div>
                    <div className={s.count}>{count=0}</div>
                    <div className={s.incr_count}>+</div>
                  </div>
                  <div className={s.btn_add_cart}>Add to cart</div>
              </div>
              <div className={s.descr_block}>
                  <h5>Description</h5>
                  <p>{description}</p>
              </div>
            </div>
              
          </div>
      }
    </div>
  )
}
