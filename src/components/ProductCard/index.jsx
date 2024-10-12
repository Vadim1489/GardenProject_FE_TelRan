import React from 'react'
import { domen } from '../../domen'

export default function ProductCard({title, price, image}) {
  return (
    <div>
        <img src={`${domen}${image}`} alt={ title } />
        <p>{ title }</p>
        <p>{price}$</p>
    </div>
  )
}
