import React from 'react'
import AllProductCard from '../AllProductCard'

export default function AllProductsContainer({products}) {
  return (
    <div>
        {
            products.map(el => <AllProductCard key={el.id} {...el} />)
        }
    </div>
  )
}
