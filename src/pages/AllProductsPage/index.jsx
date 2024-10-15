import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req";
import s from './index.module.css'
import AllProductsContainer from "../../components/AllProductsContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AllProductsPage() {

  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch])

  return (
    <div className={s.all_products}>
        <Header /> 
        <h3>All Products</h3>
        <AllProductsContainer products={allProductsState} />
        <Footer />
    </div>
  )
}