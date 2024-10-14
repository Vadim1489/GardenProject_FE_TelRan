import Footer from "../../components/Footer";
import SalesBlockMailPage from "../../components/SalesBlockMainPage"; // Выбор первого варианта
import Form from "../../components/Form"; // Выбор второго варианта

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
