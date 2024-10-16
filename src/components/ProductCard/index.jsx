import React from "react"
import { domen } from "../../domen"
import s from "./index.module.css"
import { Link } from "react-router-dom"

export default function ProductCard({ id, title, price, image, discont_price }) {

  const percentDiscount = Math.round((price - discont_price) / price * 100)


  return (
    

    <div className={s.product_card}>
<<<<<<< HEAD
      <Link to={`/products/${id}`}>
=======
>>>>>>> a582b4b44fac14300924329da7d0e238b6c0bdcb
      
      <div
        className={s.product_img}
        style={{ backgroundImage: `url(${domen}/${image})` }}
      >
        {
            percentDiscount !== 100 
            ? <span className={s.precent_discount}>-{percentDiscount}% </span>
            : null
        }
      </div>
      <div className={s.product_text}>
        <div  className={s.product_title}>
          <p>
            {title}
          </p>
        </div>


        <div className={s.product_price}>

        {
          percentDiscount !== 100 
            ? (
              <>
                <p className={s.discont_price}>{discont_price}$</p>
                <p className={s.price}>{price}$</p>
              </>
              )
            : (
                 null
              )
        }

        {
          percentDiscount === 100 
          ? <p className={s.discont_price}>{price}$</p>
          : null
        }

            
        </div>
      </div>
      </Link>
    </div>
  )
}
