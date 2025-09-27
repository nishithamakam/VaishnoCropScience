import { Leaf, Users, Award, Target, Heart, Shield, Send, Sprout } from 'lucide-react';

// Import agricultural images
import riceFieldImage from '@assets/home1.jpg';
import riceGrainsImage from '@assets/home2.jpg';
import farmingHandsImage from '@assets/home3.jpg';
import wheatGrainsImage from '@assets/home4.jpg';

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${riceFieldImage})`,
          minHeight: '35vh',
          marginTop: '80px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 data-testid="about-hero-title" className="font-display" style={{ fontSize: 'var(--font-3xl)' }}>
              Yield Enhancement with Eco-Friendly Products
            </h1>
            <p data-testid="about-hero-description" className="lead" style={{ fontSize: 'var(--font-lg)' }}>
                Advanced Organic Farm Solutions
                Sustainable Agriculture for Future Generations
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-light" data-testid="mission-vision-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" data-testid="mvv-title">Our Foundation</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-testid="mission-card">
              <div className="product-card text-center h-100" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))', borderLeft: '4px solid #3b82f6' }}>
                <div className="product-card-body">
                  <h5 data-testid="mission-title" style={{ color: 'var(--primary-green)', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Target size={20} style={{ color: '#3b82f6' }} />
                    Our Mission
                  </h5>
                  <p data-testid="mission-description" style={{ fontSize: 'var(--font-sm)', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                    To empower farmers with cutting-edge agricultural solutions that enhance crop productivity, 
                    ensure food security, and promote sustainable farming practices for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="vision-card">
              <div className="product-card text-center h-100" style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(134, 239, 172, 0.1))', borderLeft: '4px solid var(--primary-green)' }}>
                <div className="product-card-body">
                  <h5 data-testid="vision-title" style={{ color: 'var(--primary-green)', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Leaf size={20} style={{ color: 'var(--primary-green)' }} />
                    Our Vision
                  </h5>
                  <p data-testid="vision-description" style={{ fontSize: 'var(--font-sm)', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                    To become the leading agricultural solutions provider, transforming farming landscapes 
                    through innovation, research, and technology while preserving environmental harmony.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="values-card">
              <div className="product-card text-center h-100" style={{ background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(255, 138, 128, 0.1))', borderLeft: '4px solid var(--accent-red)' }}>
                <div className="product-card-body">
                  <h5 data-testid="values-title" style={{ color: 'var(--primary-green)', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Shield size={20} style={{ color: 'var(--accent-red)' }} />
                    Our Values
                  </h5>
                  <p data-testid="values-description" style={{ fontSize: 'var(--font-sm)', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                    Integrity, innovation, sustainability, and farmer-first approach guide everything we do. 
                    We believe in building lasting relationships and delivering quality solutions that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" data-testid="story-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 data-testid="story-title" className="section-title">Our Story</h2>
          <div className="row align-items-center">
            <div className="col-lg-6" data-testid="story-content">
              <div className="know-more-content">
                <div className="know-more-highlight">
                  <p data-testid="story-description-1" className="lead" style={{
                    fontFamily: 'Times New Roman',
                    fontSize: 'var(--font-lg)',
                    lineHeight: '1.8',
                    color: '#2c3e50',
                    marginBottom: '0',
                    fontWeight: '400',
                    textAlign: 'justify',
                    letterSpacing: '0.1px'
                  }}>
                     Vaishno Crop Science is based in Telangana and specializes in manufacturing and marketing organic agricultural 
                     products. The company's mission is to provide farmers with the best possible tools and resources to maximize crop yield, 
                     improve soil health, and minimize environmental impact.

                     Vaishno Crop Science is based in Telangana and specializes in manufacturing and marketing organic agricultural 
                     products. The company's mission is to provide farmers with the best possible tools and resources to maximize crop yield, 
                     improve soil health, and minimize environmental impact.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-testid="story-image">
              <img 
                src={farmingHandsImage} 
                alt="Farmer's hands holding young rice plants"
                className="img-fluid rounded shadow-lg"
                data-testid="farming-hands-image"
                style={{ width: '80%', height: 'auto', margin: '0 auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      
      


      {/* Call to Action */}
      <section className="section" data-testid="cta-section" style={{ paddingTop: '3rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, var(--light-green), rgba(255, 255, 255, 0.8))' }}>
        <div className="container text-center">
          <h2 className="section-title" data-testid="cta-title">Join Our Growing Family</h2>
          <p data-testid="cta-description" className="lead mb-4" style={{ fontSize: 'var(--font-lg)', color: 'var(--text-muted)' }}>
            Experience the difference that quality agricultural solutions can make. Connect with us today 
            and discover how Vaishno Crop Science can help you achieve better yields, healthier crops, 
            and sustainable farming success.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a 
              href="/contact" 
              className="btn-custom"
              data-testid="contact-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, var(--accent-red), #dc2626)',
                padding: 'clamp(1rem, 2.5vw, 1.2rem) clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '50px',
                fontWeight: '700',
                textDecoration: 'none',
                color: 'white',
                boxShadow: '0 8px 25px rgba(244, 67, 54, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                minWidth: 'clamp(180px, 25vw, 220px)',
                width: 'clamp(180px, 25vw, 220px)'
              }}
            >
              <Send size={20} />
              Contact Us
            </a>
            <a 
              href="/products" 
              className="btn-custom"
              data-testid="products-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                padding: 'clamp(1rem, 2.5vw, 1.2rem) clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '50px',
                fontWeight: '700',
                textDecoration: 'none',
                color: 'white',
                boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                minWidth: 'clamp(180px, 25vw, 220px)',
                width: 'clamp(180px, 25vw, 220px)'
              }}
            >
              <Leaf size={20} />
              Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}