import { Link } from 'wouter';
import HeroBackgroundCarousel from './hero-background-carousel';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section" data-testid="hero-section">
      <HeroBackgroundCarousel />
      <div className="hero-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="font-display" data-testid="hero-title" style={{
                   
                    fontSize: '58px',
                    
                  }} >
                Empowering Farmers, Enriching Crops
              </h1>
              
              <p data-testid="hero-description" style={{ fontFamily: 'serif',fontSize:"21px",fontWeight:'10px'}}>
                Leading provider of <span style={{color:'smokewhite',textDecorationLine:'overline',fontSize:"24px"}}>Organic plant growth Regulators and Fertilizers</span> designed to enhance agricultural productivity while supporting sustainable farming practices
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
 