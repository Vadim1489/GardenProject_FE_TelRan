import React from 'react'
import s from './index.module.css'
import form_image from './media/form_img.png'

export default function Form() {
  return (
    <div className={s.discount_form}>
                <p>5% off on the first order</p>
        <div className={s.discount_form_container}>
            <img src={form_image} alt="Image" />
            <form className={s.form}>
                <input type="text" name='name' placeholder='Name' />
                <input type='number' name='phone' placeholder='Phone' />
                <input type="text" name='email' placeholder='Email' />
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
