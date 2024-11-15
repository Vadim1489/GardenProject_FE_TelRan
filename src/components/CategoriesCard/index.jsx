import React from 'react';
import { domen } from '../../domen';
import s from './index.module.css';
import { Link } from 'react-router-dom'; 

export default function CategoriesCard({ title, image, id }) {
  return (
    <Link to={`/categories/${id}`} className={s.categories_card}>
      <img src={`${domen}${image}`} alt={title} />
      <h5>{title}</h5>
    </Link>
  );
}
