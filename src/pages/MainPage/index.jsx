import Footer from "../../components/Footer";
import SalesBlockMainPage from "../../components/SalesBlockMainPage"; 
import Form from "../../components/Form"; 
import s from './index.module.css'
import Header from "../../components/Header";
import WrapperContainer from "../../components/WrapperContainer";

export default function MainPage() {
  return (
    <div className={s.main}>
      <Header />
      <WrapperContainer />
      <Form />
      <SalesBlockMainPage />
      <Footer/>
    </div>
  )
}
