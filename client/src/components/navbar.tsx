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
            <span>Vaishno Crop Science</span>
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
        <div className="d-none d-lg-flex gap-3 align-items-center" style={{ marginLeft: 'auto' }}>
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

        {/* Mobile Navigation */}
        <div className={`collapse navbar-collapse d-lg-none ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                href="/" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#home')}
                data-testid="nav-home-mobile"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/about" 
                className="nav-link"
                data-testid="nav-about-mobile"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/products" 
                className="nav-link"
                data-testid="nav-products-mobile"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/resources" 
                className="nav-link"
                data-testid="nav-resources-mobile"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/contact" 
                className="nav-link"
                data-testid="nav-contact-mobile"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
