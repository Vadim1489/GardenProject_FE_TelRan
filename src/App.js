import './App.css';
import { Routes, Route } from 'react-router-dom';

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