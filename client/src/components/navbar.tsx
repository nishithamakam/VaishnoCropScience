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
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="navbar-toggle"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="d-flex gap-2 align-items-center" style={{ marginLeft: 'auto' }}>
          <Link 
            href="/" 
            className="btn btn-outline-success btn-sm"
            onClick={(e) => handleNavClick(e, '#home')}
            data-testid="nav-home"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="btn btn-outline-primary btn-sm"
            data-testid="nav-about"
          >
            About Us
          </Link>
          <Link 
            href="/products" 
            className="btn btn-success btn-sm"
            data-testid="nav-products"
          >
            Products
          </Link>
          <Link 
            href="/resources" 
            className="btn btn-outline-info btn-sm"
            data-testid="nav-resources"
          >
            Resources
          </Link>
          <Link 
            href="/contact" 
            className="btn btn-danger btn-sm"
            data-testid="nav-contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
