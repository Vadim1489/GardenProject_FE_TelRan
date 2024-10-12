import React from 'react'
import CategoryCard from '../CategoryCard'

export default function AllCategoriesContainer({ categories }) {
  return (
    <div>
        <h3>Categories</h3>
        {
            categories.map(el => <CategoryCard key={el.id} {...el} />)
        }
    </div>
  )
}
