import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import AllSalesPage from './pages/AllSalesPage';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderPopup from './components/OrderPopup';
import { useState } from 'react';
import {Context} from './context';
import { useDispatch } from 'react-redux';
import {clearCartAction} from './store/reducers/cartReducer';

function App() {
  const dispatch = useDispatch();

const [modalActive, setModalActive] = useState(false);
const closeModalWindow = () => {
  setModalActive(false);
  dispatch(clearCartAction());
};
const openModalWindow = () => setModalActive(true);



  return (
    <div className='main_container'>
      <Context.Provider value={{closeModalWindow, openModalWindow, modalActive }}>
        <OrderPopup/>
        <Header /> 
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/all_products' element={<AllProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/categories/:category_id' element={<ProductsByCategoryPage />} />
          <Route path='/products/:product_id' element={<SingleProductPage />} /> 
          <Route path='/all_sales' element={<AllSalesPage />} /> 
          <Route path='*' element={<NotFoundPage />} /> 
        </Routes>
        <Footer /> 
      </Context.Provider>
    </div>
  );
}

export default App;