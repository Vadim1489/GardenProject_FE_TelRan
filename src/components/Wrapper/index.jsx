import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Wrapper() {
  return (
    <div className={s.wrapper}>
        <h1>Amazing Discounts <br/> on Garden Products!</h1>
        <Link to={'/all_sales'}>
          <div className={s.btn}>Check out</div>
        </Link>
    </div>
  )
}
