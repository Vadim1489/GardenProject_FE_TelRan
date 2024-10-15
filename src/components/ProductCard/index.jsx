import React from "react"
import { domen } from "../../domen"
import styles from "./index.module.css"

export default function ProductCard({ title, price, image, discont_price }) {

  const percentDiscount = Math.round((price - discont_price) / price * 100)


  return (
    <div className={styles.product_card}>
      <div
        className={styles.product_img}
        style={{ backgroundImage: `url(${domen}/${image})` }}
      >
        {
            percentDiscount !== 100 
            ? <span className={styles.precent_discount}>-{percentDiscount}% </span>
            : null
        }
      </div>
      <div className={styles.product_text}>
        <div  className={styles.product_title}>
          <p>
            {title}
          </p>
        </div>


        <div className={styles.product_price}>

        {percentDiscount !== 100 ? (
          <>
            <p className={styles.discont_price}>
              {discont_price}$
            </p>
            <p className={styles.price}>
              {price}$
            </p>
          </>
) : (
  null
)}

{percentDiscount === 100 ? <p className={styles.discont_price}>
    {price}$
  </p>: null}

            
        </div>
      </div>
    </div>
  )
}
