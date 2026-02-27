'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عنّي', href: '#about' },
    { name: 'المهارات', href: '#skills' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'الخبرات', href: '#experience' },
    { name: 'تواصل', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        
        <Link href="/" className="header-logo">
          <span className="gradient-text">Rand</span>.dev
        </Link>

        
        <nav className="header-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        
        <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}