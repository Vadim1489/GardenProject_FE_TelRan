import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';



function App() {
  return (
    <div> 
      <Header/>
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
