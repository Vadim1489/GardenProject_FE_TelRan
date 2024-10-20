import React from 'react';
import CategoriesCard from '../CategoriesCard';
import s from './index.module.css';
import { Link, useLocation } from 'react-router-dom'; 

export default function AllCategoriesContainer({ categories }) {
  const location = useLocation(); 

  return (
    <div className={s.container}>
      
      {location.pathname === '/categories' && (
        <div className={s.breadcrumb}>
          <Link to="/" className={s.button}>Main Page</Link>
          <span className={s.line}></span> 
          <Link to="/categories" className={s.button}>Categories</Link>
        </div>
      )}


     
      <div className={s['categories-grid']}>
        {categories.map((el) => (
          <CategoriesCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
