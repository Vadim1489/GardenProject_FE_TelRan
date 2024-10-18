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

function App() {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='all_products' element={<AllProductsPage />} />
        <Route path='cart' element={<CartPage />} />

      </Routes>
    </div>
  );
}

export default App;