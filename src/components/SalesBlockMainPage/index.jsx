import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../requests/products_req";
import styles from './index.module.css'
import ProductCard from "../ProductCard";
import TitleBlockWithLine from "../TitleBlockWithLine/index";

export default function SalesBlockMailPage() {

  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch])

    // Получаем продукты со скидкой и перемешиваем их

  const discountedProducts = allProductsState.filter((product) => product.discont_price);
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

  // Получение первых четырех случайных продуктов
    const productsToDisplay = shuffledProducts.slice(0, 4);


  return (
    <div  className={styles.sales_block}>

      <TitleBlockWithLine  text='Sale' textBtn='All sales' link={'/all_sales'}/>



          < div className={styles.cards_block}>
       {
            productsToDisplay.map(el => <ProductCard  key={el.id} {...el} />)
        }
       
    </div>
    </div>

  )
}