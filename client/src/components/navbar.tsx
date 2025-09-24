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

  return (
    <nav className="navbar navbar-expand-lg fixed-top" data-testid="main-navbar">
      <div className="container">
        <Link href="/" className="navbar-brand" data-testid="navbar-brand">
          <div className="logo-container">
            <VCSLogo />
             <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 650, fontSize: '1.8rem' }}>
               Vaishno Crop Science
             </span>

          </div>
        </Link>
        
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="navbar-toggle"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex gap-5 align-items-center" style={{ marginLeft: 'auto' }}>
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
