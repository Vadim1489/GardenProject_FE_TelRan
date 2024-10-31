import React, { useState } from 'react';
import FilterForm from '../FilterForm';
import ProductCard from '../ProductCard'; 
import s from './index.module.css';

export default function FilteredProducts({products}) {

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters) => {
    let newFilteredProducts = products;

    if (filters.minPrice) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price <= filters.maxPrice);
    }
    if (filters.discounted) {
      newFilteredProducts = newFilteredProducts.filter(product => product.discont_price);
    }

    if (filters.sort) {
      if (filters.sort === "asc") {
        newFilteredProducts = newFilteredProducts.sort((a, b) => a.price - b.price);
      } else if (filters.sort === "desc") {
        newFilteredProducts = newFilteredProducts.sort((a, b) => b.price - a.price);
      } else if (filters.sort === "titleA") {
        newFilteredProducts = newFilteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (filters.sort === "titleZ") {
        newFilteredProducts = newFilteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
    }

    setFilteredProducts(newFilteredProducts); 
  };

  return (
    <>
      <FilterForm setCheck={handleFilter} none={false} /> 
      {
        filteredProducts.length > 0 ? (
          <div className={s.products}>
          {
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                discont_price={product.discont_price}
              />
            ))
          }
        </div>
        ) : (
          <p>No products found for this category</p> 
        )
      }
    </>
  );
}