import React, { useState } from 'react';
import { X, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Cart.css';

export default function Cart({ isOpen, onClose, cartItems, removeFromCart, updateQuantity, clearCart }) {
  const [step, setStep] = useState('cart'); // 'cart', 'checkout', 'success'
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleClose = () => {
    onClose();
    // Reset after closing animation finishes
    setTimeout(() => {
      setStep('cart');
      setFormData({ name: '', phone: '', address: '' });
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Here you would typically send the order to an API or WhatsApp
    console.log('Order Submitted:', { items: cartItems, customer: formData, total });
    setStep('success');
    if (clearCart) clearCart();
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={handleClose}></div>}
      <div className={`cart-sidebar glass ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          {step === 'checkout' ? (
            <button className="btn-icon back-btn" onClick={() => setStep('cart')}>
              <ArrowRight size={24} />
            </button>
          ) : (
            <h2>{step === 'success' ? 'تم الطلب' : 'سلة المشتريات'}</h2>
          )}
          
          {step === 'checkout' && <h2>إتمام الطلب</h2>}

          <button className="btn-icon" onClick={handleClose} aria-label="Close Cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-content-scrollable">
          {step === 'cart' && (
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart text-center">
                  <p>سلتك فارغة حالياً</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">{item.price.toLocaleString('ar-EG')} ج.م</p>
                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button 
                          className="btn-icon text-danger" 
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {step === 'checkout' && (
            <div className="checkout-form-container">
              <p className="checkout-summary">إجمالي الطلب: <strong>{total.toLocaleString('ar-EG')} ج.م</strong></p>
              <form onSubmit={handleSubmitOrder} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="name">الاسم بالكامل</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="01xxxxxxxxx"
                    dir="ltr"
                    style={{ textAlign: 'right' }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">العنوان بالتفصيل</label>
                  <textarea 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="المحافظة، المنطقة، الشارع، رقم العمارة والشقة"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-order-btn">
                  تأكيد الطلب
                </button>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="success-message text-center">
              <CheckCircle2 size={64} className="success-icon" />
              <h3>تم استلام طلبك بنجاح!</h3>
              <p>سنتواصل معك قريباً على الرقم <strong>{formData.phone}</strong> لتأكيد الطلب وتحديد موعد الاستلام.</p>
              <button className="btn btn-primary mt-3" onClick={handleClose}>
                العودة للمتجر
              </button>
            </div>
          )}
        </div>

        {step === 'cart' && cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>الإجمالي:</span>
              <span className="total-amount">{total.toLocaleString('ar-EG')} ج.م</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={() => setStep('checkout')}>
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </>
  );
}
