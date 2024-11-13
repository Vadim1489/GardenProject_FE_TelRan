import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req"
import s from "./index.module.css"
import { useLocation } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import FilteredProducts from "../../components/FilteredProducts"


export default function AllSalesPage() {
  const location = useLocation()
  const allProductsState = useSelector(store => store.allProducts)

  const dispatch = useDispatch()

  useEffect(() => dispatch(getAllProducts), [dispatch])

  // Получаем продукты со скидкой

  const discountedProducts = allProductsState.filter(
    product => product.discont_price
  )

  return (
    <div className={s.sales_block}>
      <Breadcrumbs pathes={[{title: 'All sales', link: location.pathname}]}/>
      <h3>Discounted items</h3>
      {discountedProducts.length > 0 && <FilteredProducts onlyDiscount={true} products={discountedProducts}/>}
    </div>
  )
}