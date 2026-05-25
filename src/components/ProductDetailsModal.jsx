import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import './ProductDetailsModal.css';

export default function ProductDetailsModal({ product, onClose, addToCart }) {
  const images = product.images || [product.image];
  const hasColors = product.colors && product.colors.length > 0;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(hasColors ? product.colors[0] : null);
  const [isAdding, setIsAdding] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const currentIndex = images.indexOf(activeImage) !== -1 ? images.indexOf(activeImage) : 0;

  // إغلاق النافذة وتثبيت السكرول بمفاتيح لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (images.length > 1) {
        if (e.key === 'ArrowLeft') {
          if (e) e.stopPropagation();
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          const img = images[prevIndex];
          setActiveImage(img);
          if (hasColors) {
            const matchingColor = product.colors.find(c => c.image === img);
            if (matchingColor) setSelectedColor(matchingColor);
          }
        }
        if (e.key === 'ArrowRight') {
          if (e) e.stopPropagation();
          const nextIndex = (currentIndex + 1) % images.length;
          const img = images[nextIndex];
          setActiveImage(img);
          if (hasColors) {
            const matchingColor = product.colors.find(c => c.image === img);
            if (matchingColor) setSelectedColor(matchingColor);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, images, onClose, hasColors, product.colors]);

  // تحديث الصورة واللون معاً لضمان التزامن الكامل
  const syncImageAndColor = (img) => {
    setActiveImage(img);
    if (hasColors) {
      const matchingColor = product.colors.find(c => c.image === img);
      if (matchingColor) {
        setSelectedColor(matchingColor);
      }
    }
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    syncImageAndColor(images[prevIndex]);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    syncImageAndColor(images[nextIndex]);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (color.image) {
      setActiveImage(color.image);
    }
  };

  const handleAddToCartClick = () => {
    setIsAdding(true);

    // تفاصيل مخصصة بالسلة حسب اللون النشط والصورة النشطة
    const customizedProduct = {
      ...product,
      name: selectedColor ? `${product.name} (${selectedColor.name})` : product.name,
      image: activeImage,
      // ندمج معرف اللون مع المعرف الأساسي لتجنب تداخل المنتجات المتشابهة بألوان مختلفة
      id: selectedColor ? `${product.id}-${selectedColor.name}` : product.id
    };

    addToCart(customizedProduct);

    setTimeout(() => {
      setIsAdding(false);
      setAddedSuccess(true);
      setTimeout(() => {
        setAddedSuccess(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-container">
        
        {/* زر الإغلاق */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-content-grid">
          
          {/* الجانب الأيسر: معرض الصور */}
          <div className="modal-gallery-section">
            <div className="main-image-viewport">
              <img 
                src={activeImage} 
                alt={`${product.name} view`} 
                className="modal-main-image" 
              />
              
              {images.length > 1 && (
                <>
                  <button 
                    className="nav-arrow prev" 
                    onClick={handlePrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="nav-arrow next" 
                    onClick={handleNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* شريط الصور المصغرة */}
            {images.length > 1 && (
              <div className="thumbnail-row">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-wrapper ${activeImage === img ? 'active' : ''}`}
                    onClick={() => syncImageAndColor(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${idx + 1}`} 
                      className="thumb-image" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* الجانب الأيمن: التفاصيل والألوان */}
          <div className="modal-details-section">
            <span className="modal-product-category">{product.category}</span>
            <h2 className="modal-product-title">{product.name}</h2>
            
            <div className="modal-product-price">
              <span>{product.price.toLocaleString('ar-EG')}</span>
              <span className="modal-product-price-currency">ج.م</span>
            </div>

            <p className="modal-product-description">{product.description}</p>

            {/* الألوان المتاحة */}
            {hasColors && (
              <>
                <div className="options-divider"></div>
                <div className="option-group">
                  <h3 className="option-group-title">الألوان المتوفرة:</h3>
                  <div className="color-swatch-list">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className={`color-swatch-wrapper ${selectedColor?.name === color.name ? 'active' : ''}`}
                        onClick={() => handleColorSelect(color)}
                      >
                        <button 
                          className="color-swatch-btn" 
                          style={{ backgroundColor: color.hex }}
                          aria-label={`Select ${color.name} color`}
                        >
                          {selectedColor?.name === color.name && (
                            <Check size={16} className="color-swatch-check" strokeWidth={3} />
                          )}
                        </button>
                        <span className="color-swatch-name">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="options-divider"></div>

            {/* إضافة للسلة */}
            <div className="modal-actions-container">
              <button 
                className="modal-add-to-cart-btn" 
                onClick={handleAddToCartClick}
                disabled={isAdding}
              >
                {addedSuccess ? (
                  <>
                    <Check size={20} className="added-tick" />
                    <span>تمت الإضافة بنجاح!</span>
                  </>
                ) : isAdding ? (
                  <span>جاري الإضافة...</span>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    <span>إضافة إلى سلة المشتريات</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
