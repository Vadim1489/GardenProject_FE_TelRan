import React, {useState, useEffect} from "react";
import s from "./index.module.css";

export default function FilterForm({ setCheck, onlyDiscount = false }) {

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);
  const [isDiscount, setIsDiscount] = useState(false);
  const [sort, setSort] = useState('');

  useEffect(() => {
    setCheck({ minPrice, maxPrice, isDiscount, sort });
  }, [minPrice, maxPrice, isDiscount, sort])

  return (
    <div className={s.form}>
      <div className={s.inputBlock}>
        <label htmlFor="minprice">Price</label>
        <input onChange={e => setMinPrice(e.target.value)} className={s.input} type="text" name="minprice" placeholder="from" />
        <input onChange={e => setMaxPrice(e.target.value)} className={s.input} type="text" name="maxprice" placeholder="to" />
      </div>
        {
          !onlyDiscount &&
          <label
            htmlFor="check"
            className={s.label}
          >
            Discounted items
            <input onChange={() => setIsDiscount(state => !state)} type="checkbox" name="check" id="check" className={s.checkbox} />
            <span className={s.fake} />
          </label>
        }
      <div className={s.selectBlock}>
        <select onChange={e => setSort(e.target.value)} className={s.select} name="sort" id="sort">
          <option value="">by default</option>
          <option value="asc">Ascending by price</option>
          <option value="desc">Descending by price</option>
          <option value="titleA">By title Aa-Zz</option>
          <option value="titleZ">By title Zz-Aa</option>
        </select>
      </div>
    </div>
  );
}