import React from 'react'
import { domen } from '../../domen'

export default function CategoryCard({ title, image }) {
  return (
    <div>
        <img src={`${domen}${image}`} alt={title} />
        <h5>{title}</h5>
    </div>
  )
}
