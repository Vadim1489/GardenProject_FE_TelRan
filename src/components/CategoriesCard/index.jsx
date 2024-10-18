import React from 'react';
import { domen } from '../../domen';
import s from './index.module.css';
import { Link } from 'react-router-dom'; // Импортируем Link

export default function CategoriesCard({ title, image, id }) {
  return (
    <Link to={`/category/${id}`} className={s['categories-card']}>
      <img src={`${domen}${image}`} alt={title} />
      <h5>{title}</h5>
    </Link>
  );
}
