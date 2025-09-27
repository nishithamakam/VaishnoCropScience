import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import VCSLogo from './vcs-logo';

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location === '/' && targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false);
    }
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" data-testid="main-navbar">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center" data-testid="navbar-brand">
          <div className="logo-container">
            <VCSLogo size={60} />
            <span className="brand-text ms-2">
              Vaishno Crop Science
            </span>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler custom-toggler d-lg-none" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="navbar-toggle"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav d-none d-lg-flex align-items-center">
          <Link 
            href="/" 
            className="nav-btn-circular"
            onClick={(e) => handleNavClick(e, '#home')}
            data-testid="nav-home"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="nav-btn-circular"
            onClick={(e) => handleNavClick(e, '#about')}
            data-testid="nav-about"
          >
            About Us
          </Link>
          <Link 
            href="/products" 
            className="nav-btn-circular"
            data-testid="nav-products"
          >
            Products
          </Link>
          <Link 
            href="/resources" 
            className="nav-btn-circular"
            data-testid="nav-resources"
          >
            Resources
          </Link>
          <Link 
            href="/contact" 
            className="nav-btn-circular"
            data-testid="nav-contact"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div className={`mobile-sidebar d-lg-none ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <div className="mobile-sidebar-content">
            <div className="mobile-sidebar-header">
              <h5>Main Menu</h5>
              <button 
                className="btn-close" 
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-close-button"
              ></button>
            </div>
            <ul className="mobile-nav-list">
              <li>
                <Link 
                  href="/" 
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, '#home')}
                  data-testid="nav-home-mobile"
                >
                  <i className="fas fa-home me-3"></i>Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, '#about')}
                  data-testid="nav-about-mobile"
                >
                  <i className="fas fa-users me-3"></i>About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="mobile-nav-link"
                  data-testid="nav-products-mobile"
                >
                  <i className="fas fa-seedling me-3"></i>Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources" 
                  className="mobile-nav-link"
                  data-testid="nav-resources-mobile"
                >
                  <i className="fas fa-book me-3"></i>Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="mobile-nav-link"
                  data-testid="nav-contact-mobile"
                >
                  <i className="fas fa-envelope me-3"></i>Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      </div>
    </nav>
  );
}
