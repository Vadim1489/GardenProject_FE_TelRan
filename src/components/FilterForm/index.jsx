import React from "react"
import s from "./index.module.css"
import { useDispatch } from 'react-redux';

export default function FilterForm({ none, setCheck }) {
    const dispatch = useDispatch();
  return (
    <form className={s.form}>
      <div className={s.inputBlock}>
        <label htmlFor="minprice">Price</label>
        <input className={s.input}type="text"id="minprice"placeholder="from"/>
        <input className={s.input} type="text" id="" placeholder="to"/>
      </div>
      <label
        htmlFor="check"
        className={s.label}
        style={{ display: none ? "none" : "" }}
      >
        Discounted items
        <input type="checkbox" id="check" className={s.checkbox} />
        <span className={s.fake} />
      </label>
      <div className={s.selectBlock}>
      <select className={s.select} id="sort">
          <option>by default</option>
          <option value="asc">Ascending by price</option>
          <option value="desc">Descending by price</option>
          <option value="titleA">By title Aa-Zz</option>
          <option value="titleZ">By title Zz-Aa</option>
        </select>
      </div>
    </form>
  )
}
