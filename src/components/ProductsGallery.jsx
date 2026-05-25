import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductsGallery.css';

export default function ProductsGallery({ addToCart }) {
  const [filter, setFilter] = useState('الكل');

  const categories = ['الكل', ...new Set(products.map(p => p.category))];

  const filteredProducts = filter === 'الكل' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="products" className="products-section container">
      <div className="section-header text-center">
        <h2 className="section-title">أحدث منتجاتنا</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">تصفح تشكيلتنا المميزة من الأثاث الفاخر</p>
      </div>

      <div className="categories-filter">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="animate-fade-in">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}
