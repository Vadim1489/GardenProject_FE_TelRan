import React, { useEffect, useState } from 'react';
import s from './index.module.css'
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/categories_req';
import { changeProductByCategoryStatusAction } from '../../store/reducers/productsByCategoryReducer';
import FilteredProducts from '../../components/FilteredProducts';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ProductsByCategoryPage() {
    const { category_id } = useParams(); 
    const location = useLocation();

    const dispatch = useDispatch();

    const productsByCategoryState = useSelector(store => store.productsByCategory);

    const products = productsByCategoryState.data?.data;
    const title = productsByCategoryState.data?.category?.title;
    const status = productsByCategoryState.status;

    useEffect(() => {
      dispatch(changeProductByCategoryStatusAction())
      dispatch(getProductsByCategory(category_id))
    }, [])

  return (
    <div className={s.container}>
      <Breadcrumbs pathes={[
          {title: 'Categories', link: '/categories'},
          {title: title, link: location.pathname},
        ]}/>
      {
        status === 'loading'
        ? <p>Products are loading...</p>
        : <>
          <h3 class={s.title}>Products in Category: {title}</h3>
          <FilteredProducts products={products}/>
        </>
      }
    </div>
  );
}