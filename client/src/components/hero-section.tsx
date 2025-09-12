import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section" data-testid="hero-section">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="font-display" data-testid="hero-title">
                Cultivating Tomorrow's Agriculture
              </h1>
              <p data-testid="hero-description">
                Leading agricultural solutions through innovative crop science and sustainable farming technologies
              </p>
              <Link href="/products" className="btn-custom" data-testid="hero-cta-button">
                <i className="fas fa-seedling me-2"></i>Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
