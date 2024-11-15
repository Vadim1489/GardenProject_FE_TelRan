import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req";
import s from './index.module.css'
import FilteredProducts from "../../components/FilteredProducts";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function AllProductsPage() {

  const location = useLocation()

  const allProductsState = useSelector(store => store.allProducts);
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch])

  return (
    <div className={s.all_products}>
        <Breadcrumbs pathes={[{title: 'All products', link: location.pathname}]}/>
        <h3>All Products</h3>
        {allProductsState.length > 0 && <FilteredProducts products={allProductsState}/>}
    </div>
  )
}