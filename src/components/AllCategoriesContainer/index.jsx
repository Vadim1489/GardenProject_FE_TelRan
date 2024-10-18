import React from 'react';
import CategoriesCard from '../CategoriesCard';
import s from './index.module.css';
import { Link, useLocation } from 'react-router-dom'; // Импортируем useLocation

export default function AllCategoriesContainer({ categories }) {
  const location = useLocation(); // Получаем информацию о текущем пути

  return (
    <div className={s.container}>
      {/* Отображаем навигацию только на странице категорий */}
      {location.pathname === '/categories' && (
        <div className={s.breadcrumb}>
          <Link to="/" className={s.button}>Main Page</Link>
          <span className={s.line}></span> {/* Линия между ссылками */}
          <Link to="/categories" className={s.button}>Categories</Link>
        </div>
      )}

      {/* Заголовок */}
      <h3 className={s['categories-title']}>Categories</h3>

      {/* Сетка с карточками */}
      <div className={s['categories-grid']}>
        {categories.map((el) => (
          <CategoriesCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
