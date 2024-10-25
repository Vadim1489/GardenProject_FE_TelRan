import React from 'react';
import CartContainer from '../../components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  return (
    <div>
      <h2>Shopping cart</h2>
      {
        cartState.length === 0
        ? <div>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to={'/all_products'}>
              <div>Continue Shopping</div>
            </Link>
          </div>
        : <CartContainer cartState={cartState}/>
      }
<p>Items count: {totalCount}</p>
<p>Total price: {totalSum}</p>

    </div>
  )
}