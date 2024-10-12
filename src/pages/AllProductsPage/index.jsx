import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req";
import AllProductsContainer from "../../components/AllProductsContainer";

export default function AllProductsPage() {

  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch])

  return (
    <div>
        <h3>All Products</h3>
        <AllProductsContainer products={allProductsState} />
    </div>
  )
}