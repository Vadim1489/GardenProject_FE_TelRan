import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../requests/products_req";
import s from './index.module.css'
import Breadcrumbs from "../../components/Breadcrumbs";
import { useLocation } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard";
import { getCategoryById } from "../../requests/categories_req";

export default function SingleProductPage() {

  const { product_id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();

  const singleProductState = useSelector(store => store.singleProduct);
  const singleCategoryState = useSelector(store => store.singleCategory);
  const categoryId = singleProductState?.data[0].categoryId;
  const categoryTitle = singleCategoryState?.data?.title;

  useEffect(()=>{
    dispatch(getSingleProduct(product_id));
  },[dispatch]);

  useEffect(() => {
    if(singleProductState) {
      dispatch(getCategoryById(categoryId));
    }
  }, [singleProductState, dispatch])
  

  return (
    <div className={s.container}>
      <Breadcrumbs pathes={[
        {title: 'Categories', link: '/categories'},
        {title: categoryTitle, link: '/categories/'+categoryId},
        {title: singleProductState.data[0].title, link: location.pathname}
      ]}/>
      <div className={s.single_product}>
        {
          singleProductState.data.map(el => <SingleProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}