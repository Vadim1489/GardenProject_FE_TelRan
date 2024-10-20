import SalesBlock from "../../components/SalesBlock";
import WrapperContainer from "../../components/WrapperContainer";
import Form from "../../components/Form";
import s from "./index.module.css";
import CategoriesBlock from "../../components/CategoriesBlock";


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
