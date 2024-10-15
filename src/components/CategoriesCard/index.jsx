import React from 'react';
import { domen } from '../../domen';
// import s from "./index.module.css";

export default function CategoriesCard({ title, image }) {
  return (
    <div>
        <img src={`${domen}${image}`} alt={title}/>
        <h5>{title}</h5>
    </div>
  )
}
