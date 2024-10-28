import React from 'react';
import CartContainer from '../../components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearCartAction} from '../../store/reducers/cartReducer';
import s from './index.module.css';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function CartPage() {

  const location = useLocation()
  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  return (
    <div className={s.container}>
      <Breadcrumbs pathes={[{title: 'Shopping cart', link: location.pathname}]}/>
      <h2 className={s.name_page}>Shopping cart</h2>
      {
        cartState.length === 0
        ? <div>
          <p>Looks like you have no items in your basket currently.</p> 
          <Link to={'/all_products'}>
              <div className={s.continue_button}>Continue Shopping</div>
            </Link>
          </div>
        :<div>
            <CartContainer cartState={cartState}/>
            <div className={s.clear_button} onClick={() => dispatch(clearCartAction())}>Clear Cart</div>
            <p>Items count: {totalCount}</p>
            <p>Total price: {totalSum}</p>
          </div>
      }

    </div>
  )
}