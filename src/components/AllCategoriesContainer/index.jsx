import React from 'react';
import CategoriesCard from '../CategoriesCard';
import s from './index.module.css';

export default function AllCategoriesContainer({ categories }) {

  return (
    <div className={s.categories_grid}>
      {categories.map((el) => (
        <CategoriesCard key={el.id} {...el} />
      ))}
    </div>
  );
}
