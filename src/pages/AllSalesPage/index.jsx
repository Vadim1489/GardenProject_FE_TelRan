import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req"
import s from "./index.module.css"
import ProductCard from "../../components/ProductCard"
import FilterForm from "../../components/FilterForm"
import { useFiltration } from "../../customHooks/useFiltralion"
import { Link } from "react-router-dom"

export default function AllSalesPage() {
  const allProductsState = useSelector(store => store.allProducts)

  const dispatch = useDispatch()

  useEffect(() => dispatch(getAllProducts), [dispatch])

  // Получаем продукты со скидкой

  const discountedProducts = allProductsState.filter(
    product => product.discont_price
  )

  return (
    <div className={s.sales_block}>
      <h3>Discounted items</h3>
      <FilterForm none={"none"} />
      <div className={s.cards_block}>
        {discountedProducts.map(el =>
          <Link key={el.id} to={`${"/products/:id".replace(":id", el.id)}`}>
            <ProductCard key={el.id} {...el} />
          </Link>
        )}
      </div>
    </div>
  )
}
