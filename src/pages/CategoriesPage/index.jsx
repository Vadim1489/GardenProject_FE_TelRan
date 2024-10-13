import { useDispatch, useSelector } from "react-redux";
import AllCategoriesContainer from "../../components/AllCategoriesContainer";
import { useEffect } from "react";
import { getAllCategories } from "../../requests/categories_req";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CategoriesPage() {

  const dispatch = useDispatch();

  const allCategoriesState = useSelector(store => store.allCategories);

  useEffect(()=> dispatch(getAllCategories),[dispatch])

  return (
    <div>
        <Header />
        <AllCategoriesContainer categories = {allCategoriesState} />
        <Footer />
    </div>
  )
}