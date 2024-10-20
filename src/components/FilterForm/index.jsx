import React from "react";
import s from "./index.module.css";
import { useDispatch } from 'react-redux';

export default function FilterForm({ none, setCheck }) {
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const minPrice = parseFloat(formData.get('minprice')) || null;
    const maxPrice = parseFloat(formData.get('maxprice')) || null;
    const discounted = formData.get('check') ? true : false;
    const sort = formData.get('sort') || null;

    setCheck({ minPrice, maxPrice, discounted, sort }); 
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputBlock}>
        <label htmlFor="minprice">Price</label>
        <input className={s.input} type="text" name="minprice" placeholder="from" />
        <input className={s.input} type="text" name="maxprice" placeholder="to" />
      </div>
      <label
        htmlFor="check"
        className={s.label}
        style={{ display: none ? "none" : "" }}
      >
        Discounted items
        <input type="checkbox" name="check" id="check" className={s.checkbox} />
        <span className={s.fake} />
      </label>
      <div className={s.selectBlock}>
        <select className={s.select} name="sort" id="sort">
          <option value="">by default</option>
          <option value="asc">Ascending by price</option>
          <option value="desc">Descending by price</option>
          <option value="titleA">By title Aa-Zz</option>
          <option value="titleZ">By title Zz-Aa</option>
        </select>
      </div>
      <button type="submit">Apply Filters</button> 
    </form>
  );
}
