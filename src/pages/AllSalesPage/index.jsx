import React, { useEffect }  from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import s from './index.module.css'
import ProductCard from "../../components/ProductCard";

export default function AllSalesPage() {
  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch]);

  // Получаем продукты со скидкой

  const discountedProducts = allProductsState.filter(
    (product) => product.discont_price
  );
 
  return (
    <div className={s.sales_block}>
        <div className={s.cards_block}>
        {discountedProducts.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}