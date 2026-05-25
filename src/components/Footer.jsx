import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer id="about" className="footer reveal reveal-up">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="brand-text">مفروشات العبد</h2>
          <p className="footer-description">
            نقدم لكم أرقى تشكيلات الأثاث المنزلي والمفروشات العصرية التي تجمع بين الفخامة، الجودة، والراحة لتناسب جميع الأذواق.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Messages">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>



        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <ul>
            <li>
              <MapPin size={20} />
              <span>المحلة الكبرى , الغربيه</span>
            </li>
            <li>
              <Phone size={20} />
              <span dir="ltr">+201000000</span>
            </li>
            <li>
              <Mail size={20} />
              <span>Elabd@elabd-furniture.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} مفروشات العبد. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
