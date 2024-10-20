import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../requests/products_req";
import s from './index.module.css'

import SingleProductCard from "../../components/SingleProductCard";

export default function SingleProductPage() {

  const { product_id } = useParams();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSingleProduct(product_id));
  },[]);

  const singleProductState = useSelector(store => store.singleProduct);

  return (
    <div className={s.single_product_page}>
      {
        singleProductState.data.map(el => <SingleProductCard key={el.id} {...el} />)
      }
    </div>
  )
}