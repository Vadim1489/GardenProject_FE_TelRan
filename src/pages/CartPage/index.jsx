import React, { useEffect } from "react"
import CartContainer from "../../components/CartContainer"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import s from "./index.module.css"
import FormCart from "../../components/FormCart/index"
import Breadcrumbs from "../../components/Breadcrumbs/index"
import { useLocation } from "react-router-dom"

export default function CartPage() {
  const location = useLocation()
  const cartState = useSelector(store => store.cart)

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0)
  const totalSum = +cartState
    .reduce((acc, el) => {
      const finalPrice = el.discont_price ? el.discont_price : el.price
      return acc + finalPrice * el.count
    }, 0)
    .toFixed(2)

  useEffect(
    () => {
      localStorage.setItem("cart", JSON.stringify(cartState))
    },
    [cartState]
  )

  return (
    <div className={s.container}>
      <Breadcrumbs
        pathes={[{ title: "Shopping cart", link: location.pathname }]}
      />
      <h2 className={s.name_page}>Shopping cart</h2>
      {cartState.length === 0
        ? <div>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to={"/all_products"}>
              <div className={s.continue_button}>Continue Shopping</div>
            </Link>
          </div>
        : <div className={s.cart}>
            <div>
              <CartContainer cartState={cartState} />
            </div>
            <div className={s.details}>
              <p className={s.order_details}>Order details</p>
              <p className={s.total}>
                {totalCount} items
              </p>
              <div className={s.price_container}>
                <p className={s.total}>Total </p>
                <p className={s.total_sum}>
                  ${totalSum}
                </p>
              </div>
              <FormCart />
            </div>
          </div>}
    </div>
  )
}
