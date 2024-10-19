import { useDispatch, useSelector } from "react-redux";
import s from './index.module.css';
import AllCategoriesContainer from "../../components/AllCategoriesContainer";
import { useEffect } from "react";
import { getAllCategories } from "../../requests/categories_req";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const location = useLocation()

  const allCategoriesState = useSelector(store => store.allCategories);

  useEffect(()=> dispatch(getAllCategories),[dispatch])

  return (
    <div className={s.container}>
        <Breadcrumbs pathes={[{title: 'Categories', link: location.pathname}]}/>
        <h3 className={s.title}>Categories</h3>
        <AllCategoriesContainer categories = {allCategoriesState} />
    </div>
  )
}