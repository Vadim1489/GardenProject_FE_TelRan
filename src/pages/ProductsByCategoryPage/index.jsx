import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { domen } from '../../domen';
import FilterForm from '../../components/FilterForm';
import ProductCard from '../../components/ProductCard'; 

export default function ProductsByCategoryPage() {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    fetch(`${domen}/categories/${categoryId}/products`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched products:', data); 
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch(error => {
        // console.error('Error fetching products:', error);
        setProducts([]); 
      });
  }, [categoryId]);

  
  const handleFilter = (filters) => {
    let newFilteredProducts = products;

    if (filters.minPrice) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price <= filters.maxPrice);
    }
    if (filters.discounted) {
      newFilteredProducts = newFilteredProducts.filter(product => product.discont_price < product.price);
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
    <div>
      <h3>Products in Category: {categoryId}</h3>
      <FilterForm setCheck={handleFilter} none={false} /> 
      <div>
        {filteredProducts.length > 0 ? (
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
        ) : (
          <p>No products found for this category</p> 
        )}
      </div>
    </div>
  );
}