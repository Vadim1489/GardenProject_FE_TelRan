import React from 'react';
import CartContainer from '../../components/CartContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);

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


    </div>
  )
}