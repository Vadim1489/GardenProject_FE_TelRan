import React, { useEffect } from 'react';
import AllProductCard from '../AllProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../requests/products_req';

export default function SalesBlock_MainPage({ products }) {
  const allProductsState = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();

  // Вызов функции для получения всех продуктов
  useEffect(() => dispatch(getAllProducts), [])
  

  // Фильтрация и перемешивание продуктов со скидкой
  const discountedProducts = products?.filter((product) => product.discont_price);
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

  // return (
  //   <div className="container">
  //     {shuffledProducts.slice(0, 4).map((products) => (
  //       <AllProductCard products={allProductsState} />
  //     ))}
  //   </div>
  // );
}
