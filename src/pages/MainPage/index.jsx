import Footer from "../../components/Footer";
import SalesBlockMailPage from "../../components/SalesBlockMainPage"; // Выбор первого варианта
import Form from "../../components/Form"; // Выбор второго варианта
import WrapperContainer from "../../components/WrapperContainer";
import Header from "../../components/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <WrapperContainer />
      <Form />
      <SalesBlockMailPage /> 
      <Footer/>
    </div>
  )
}
