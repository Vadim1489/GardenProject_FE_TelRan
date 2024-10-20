import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { domen } from '../../domen';
import FilterForm from '../../components/FilterForm';
import ProductCard from '../../components/ProductCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/categories_req';
import { changeProductByCategoryStatusAction } from '../../store/reducers/productsByCategoryReducer';
import AllProductsContainer from '../../components/AllProductsContainer';

export default function ProductsByCategoryPage() {
  
    const { category_id } = useParams(); 

    const dispatch = useDispatch();

               // const [filteredProducts, setFilteredProducts] = useState([]);

    const productsByCategoryState = useSelector(store => store.productsByCategory);
 
    const products = productsByCategoryState.data;
    

    useEffect(() => dispatch(getProductsByCategory(category_id)), [])




  
      // const handleFilter = (filters) => {
      //   let newFilteredProducts = products;

      //   if (filters.minPrice) {
      //     newFilteredProducts = newFilteredProducts.filter(product => product.price >= filters.minPrice);
      //   }
      //   if (filters.maxPrice) {
      //     newFilteredProducts = newFilteredProducts.filter(product => product.price <= filters.maxPrice);
      //   }
      //   if (filters.discounted) {
      //     newFilteredProducts = newFilteredProducts.filter(product => product.discont_price < product.price);
      //   }

      //   if (filters.sort) {
      //     if (filters.sort === "asc") {
      //       newFilteredProducts = newFilteredProducts.sort((a, b) => a.price - b.price);
      //     } else if (filters.sort === "desc") {
      //       newFilteredProducts = newFilteredProducts.sort((a, b) => b.price - a.price);
      //     } else if (filters.sort === "titleA") {
      //       newFilteredProducts = newFilteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      //     } else if (filters.sort === "titleZ") {
      //       newFilteredProducts = newFilteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      //     }
      //   }

      //   setFilteredProducts(newFilteredProducts); 
      // };



            //   <div>
            //   <h3>Products in Category: {category}</h3>
            //   <FilterForm setCheck={handleFilter} none={false} /> 
            //   <div>
            //     {filteredProducts.length > 0 ? (
            //       filteredProducts.map(product => (
            //         <ProductCard 
            //           key={product.id}
            //           id={product.id}
            //           title={product.title}
            //           price={product.price}
            //           image={product.image}
            //           discont_price={product.discont_price}
            //         />
            //       ))
            //     ) : (
            //       <p>No products found for this category</p> 
            //     )}
            //   </div>
            // </div>

  return (
    <div>
      {
        products.data.map(el=><ProductCard key={el.id} {...el} />)
      }
    </div>
  );
}