'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function Hero() {
  const { personal } = cvData;
  const [typedText, setTypedText] = useState('');
  const titles = ['مطور واجهات أمامية', 'مطور Next.js', 'مصمم UI/UX'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let typeIndex = 0;

    const type = () => {
      const fullText = titles[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typeIndex--;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typeIndex++;
      }

      setTypedText(currentText);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {personal.availability}
          </div>

          
          <h1 className="hero-title">
            مرحباً، أنا 
            <span className="gradient-text"> {personal.name}</span>
          </h1>

          
          <div className="hero-subtitle">
            <span className="subtitle-prefix">أنا </span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </div>

          
          <p className="hero-description">
            {personal.bio}
          </p>

          
          <div className="hero-buttons">
            <Link href="#contact" className="btn-primary">
              تواصل معي
              <Icon name="FaEnvelope" size={18} />
            </Link>
            <a 
              href="/cv.pdf" 
              download 
              className="btn-secondary"
            >
              تحميل السيرة
              <Icon name="FaDownload" size={18} />
            </a>
          </div>

          
          <div className="hero-social">
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Icon name="FaGithub" size={22} />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Icon name="FaLinkedin" size={22} />
            </a>
            <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Icon name="FaTwitter" size={22} />
            </a>
            <a href={personal.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Icon name="FaInstagram" size={22} />
            </a>
          </div>
        </div>

        
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-background"></div>
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
            
            <div className="floating-icon icon-1">
              <Icon name="FaReact" size={24} color="#61DAFB" />
            </div>
            <div className="floating-icon icon-2">
              <Icon name="SiNextdotjs" size={24} color="#000000" />
            </div>
            <div className="floating-icon icon-3">
              <Icon name="FaNodeJs" size={24} color="#339933" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="scroll-indicator">
        <span>اسحب للأسفل</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}