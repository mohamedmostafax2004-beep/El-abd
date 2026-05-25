import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductsGallery.css';

export default function ProductsGallery({ addToCart, onOpenDetails }) {
  const [filter, setFilter] = useState('الكل');

  const categories = ['الكل', ...new Set(products.map(p => p.category))];

  const filteredProducts = filter === 'الكل' 
    ? products 
    : products.filter(p => p.category === filter);

  // تفعيل Intersection Observer لمراقبة سكرول العناصر والبطاقات في المعرض
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20px 0px', // تقريب مسافة التشغيل لتناسب شاشات الموبايل القصيرة
      threshold: 0.01, // تفعيل التأثير فور ملامسة 1% من العنصر للشاشة
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // اختيارياً: فك المراقبة بمجرد الظهور لتجنب إعادة تشغيل الأنيميشن
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('#products .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProducts, filter]); // إعادة التنشيط فور تغيير التصنيف لظهور الكروت بنعومة

  return (
    <section id="products" className="products-section container reveal">
      <div className="section-header text-center reveal reveal-up">
        <h2 className="section-title">أحدث منتجاتنا</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">تصفح تشكيلتنا المميزة من ملايات السرير والمنسوجات الفاخرة</p>
      </div>

      <div className="categories-filter reveal reveal-up delay-100">
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
        {filteredProducts.map((product, idx) => (
          <div 
            key={product.id} 
            className="reveal reveal-up"
            style={{ transitionDelay: `${(idx % 3) * 100}ms` }} // تأثير حركة متموج رائع للكروت (Cascade Effect)
          >
            <ProductCard 
              product={product} 
              addToCart={addToCart} 
              onOpenDetails={onOpenDetails}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
