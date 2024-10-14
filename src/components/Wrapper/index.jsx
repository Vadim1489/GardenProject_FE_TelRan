import React from 'react'
import s from './index.module.css'

export default function Wrapper() {
  return (
    <div className={s.wrapper}>
        <h1>Amazing Discounts <br/> on Garden Products!</h1>
        <div className={s.btn}>Check out</div>
    </div>
  )
}
