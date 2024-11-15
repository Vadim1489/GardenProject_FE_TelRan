import React from "react";
import s from "./index.module.css";
import TitleBlockWithLine from "../TitleBlockWithLine";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../requests/categories_req";
import AllCategoriesContainer from "../AllCategoriesContainer";

export default function CategoriesBlock() {

  const dispatch = useDispatch();

  const allCategoriesState = useSelector(store => store.allCategories);

  const slicedCategories = [...allCategoriesState].slice(0  , 4);

  useEffect(()=> dispatch(getAllCategories),[dispatch])

  return (
    <div className={s.block}>
      <TitleBlockWithLine text="Categories" textBtn="All categories" link={"/categories"} />
      <AllCategoriesContainer categories = {slicedCategories}/>
    </div>
  )
}