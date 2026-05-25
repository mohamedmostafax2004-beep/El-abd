import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGallery from './components/ProductsGallery';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductDetailsModal from './components/ProductDetailsModal';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Initialize theme from system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // تأثير مراقبة التمرير العام (Intersection Observer) لظهور العناصر بنعومة بالغة عند التمرير
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
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // نراقب العناصر بداخل الهيرو، الفوتر، وجسم الصفحة الرئيسي
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Optional: Open cart when adding item
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar 
        cartCount={cartCount} 
        toggleCart={toggleCart} 
        toggleTheme={toggleTheme} 
        theme={theme} 
      />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />

      <main>
        <Hero />
        <ProductsGallery addToCart={addToCart} onOpenDetails={setSelectedProduct} />
      </main>

      <Footer />

      {/* النافذة التفاعلية لمعاينة التفاصيل والألوان في جذر الصفحة لتجنب مشاكل الـ Transform */}
      {selectedProduct && (
        <ProductDetailsModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          addToCart={addToCart} 
        />
      )}
    </div>
  );
}

export default App;
