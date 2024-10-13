import React from 'react'
import s from './index.module.css'
import background_img from './media/wrap_background.png'

export default function Wrapper() {
  return (
    <div>
        <img src={background_img} alt="background_img" />
        <div>
            <h1>Amazing Discounts on Garden Products!</h1>
            <div>Check out</div>
        </div>
    </div>
  )
}
