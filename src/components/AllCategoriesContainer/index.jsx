import CategoriesCard from '../CategoriesCard';
import React from 'react';

export default function AllCategoriesContainer({categories}) {

  return (
    <div>
        <h3>Categories</h3>
        {
            categories.map(el => <CategoriesCard key={el.id} {...el} />)
        }
    </div>
  )
}
