'use client';
import Link from 'next/link';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function Footer() {
  const { personal } = cvData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Logo & Bio */}
          <div className="footer-col">
            <h3 className="footer-logo">
              <span className="gradient-text">{personal.name.split(' ')[0]}</span>.dev
            </h3>
            <p className="footer-bio">
              {personal.bio.substring(0, 100)}...
            </p>
            <div className="footer-social">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icon name="FaGithub" size={18} />
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icon name="FaLinkedin" size={18} />
              </a>
              <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icon name="FaTwitter" size={18} />
              </a>
              <a href={personal.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icon name="FaInstagram" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#about">عنّي</a></li>
              <li><a href="#skills">المهارات</a></li>
              <li><a href="#projects">المشاريع</a></li>
              <li><a href="#contact">تواصل</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-title">ماذا أقدم؟</h4>
            <ul className="footer-links">
              <li>تطوير مواقع</li>
              <li>تطبيقات ويب</li>
              <li>تصميم واجهات</li>
              <li>استشارات تقنية</li>
              <li>تدريب وتأهيل</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">معلومات الاتصال</h4>
            <ul className="footer-contact">
              <li>
                <Icon name="FaEnvelope" size={14} />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </li>
              <li>
                <Icon name="FaPhone" size={14} />
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </li>
              <li>
                <Icon name="FaMapMarkerAlt" size={14} />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personal.name}. جميع الحقوق محفوظة
          </p>
          <p className="made-with">
            صُنع بـ 
            <Icon name="FaHeart" size={14} color="#ff4757" />
            باستخدام Next.js
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="FaArrowUp" size={20} />
      </button>
    </footer>
  );
}