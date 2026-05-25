import React from 'react';
import { ArrowLeft } from 'lucide-react';
import img1 from '../assets/products/5999101996138875266_121.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${img1})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in">
          الأناقة والفخامة لمنزلك
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100">
          اكتشف تشكيلة مفروشات العبد الحصرية، حيث تجتمع الجودة مع التصميم العصري لتلبي جميع أذواقكم.
        </p>
        <div className="hero-actions animate-fade-in delay-200">
          <a href="#products" className="btn btn-primary">
            تسوق الآن
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
