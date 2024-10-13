import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req";
import AllProductsContainer from "../../components/AllProductsContainer";

export default function SalesBlock_MainPage() {

  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch])

    // Получаем продукты со скидкой и перемешиваем их

  const discountedProducts = allProductsState.filter((product) => product.discont_price);
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

  // Получение первых четырех случайных продуктов
    const productsToDisplay = shuffledProducts.slice(0, 4);


  return (
    <div>
        <AllProductsContainer products={productsToDisplay} />
    </div>
  )
}