import Footer from "../../components/Footer";
import SalesBlockMainPage from "../../components/SalesBlock";
import WrapperContainer from "../../components/WrapperContainer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import s from "./index.module.css";
import CategoriesBlock from "../../components/CategoriesBlock";
import SalesBlock from "../../components/SalesBlock";


export default function MainPage() {
  return (
    <div className={s.main}>
      <WrapperContainer />
      <CategoriesBlock/>
      <Form />
      <SalesBlock />
    </div>
  )
}
