import Footer from "../../components/Footer";
import SalesBlockMainPage from '../../components/SalesBlockMainPage';
import Form from "../../components/Form"; 
import WrapperContainer from "../../components/WrapperContainer";
import Header from "../../components/Header";
import s from './index.module.css'

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
