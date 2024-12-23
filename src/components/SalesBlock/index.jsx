import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import s from "./index.module.css";
import ProductCard from "../ProductCard";
import TitleBlockWithLine from "../TitleBlockWithLine/index";

export default function SalesBlock() {

  const allProductsState = useSelector(store => store.allProducts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch]);


  const discountedProducts = allProductsState.filter(
    (product) => product.discont_price
  );
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

  const productsToDisplay = shuffledProducts.slice(0, 4);

  return (
    <div className={s.sales_block}>
      <TitleBlockWithLine text="Sale" textBtn="All sales" link={"/all_sales"} />

      <div className={s.cards_block}>
        {productsToDisplay.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
