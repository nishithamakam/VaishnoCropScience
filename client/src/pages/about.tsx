import { Leaf, Users, Award, Target, Heart, Shield } from 'lucide-react';

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
          minHeight: '70vh',
          marginTop: '80px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 data-testid="about-hero-title" className="font-display">
              Yield Enhancement with Eco-Friendly Products
            </h1>
            <p data-testid="about-hero-description" className="lead">
                Advanced Organic Farm Solutions
                Sustainable Agriculture for Future Generations
              
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-light" data-testid="mission-vision-section">
        <div className="container">
          <h2 className="section-title" data-testid="mvv-title">Our Foundation</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-testid="mission-card">
              <div className="product-card text-center h-100">
                <div className="product-card-body">
                  <Target className="text-primary mb-3" size={48} data-testid="mission-icon" />
                  <h5 data-testid="mission-title">Our Mission</h5>
                  <p data-testid="mission-description">
                    To empower farmers with cutting-edge agricultural solutions that enhance crop productivity, 
                    ensure food security, and promote sustainable farming practices for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="vision-card">
              <div className="product-card text-center h-100">
                <div className="product-card-body">
                  <Leaf className="text-success mb-3" size={48} data-testid="vision-icon" />
                  <h5 data-testid="vision-title">Our Vision</h5>
                  <p data-testid="vision-description">
                    To become the leading agricultural solutions provider, transforming farming landscapes 
                    through innovation, research, and technology while preserving environmental harmony.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="values-card">
              <div className="product-card text-center h-100">
                <div className="product-card-body">
                  <Heart className="text-danger mb-3" size={48} data-testid="values-icon" />
                  <h5 data-testid="values-title">Our Values</h5>
                  <p data-testid="values-description">
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
      <section className="section" data-testid="story-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-testid="story-content">
              <h2 className="section-title text-left" data-testid="story-title">Our Story</h2>
              <p data-testid="story-description-1" className="lead">
              
                 Vaishno Crop Science is based in Telangana and specializes in manufacturing and marketing organic agricultural 
                 products. The company's mission is to provide farmers with the best possible tools and resources to maximize crop yield, 
                 improve soil health, and minimize environmental impact.
              </p>
              
            </div>
            <div className="col-lg-6" data-testid="story-image">
              <img 
                src={farmingHandsImage} 
                alt="Farmer's hands holding young rice plants"
                className="img-fluid rounded shadow-lg"
                data-testid="farming-hands-image"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      
      


      {/* Call to Action */}
      <section className="section" data-testid="cta-section">
        <div className="container text-center">
          <h2 className="section-title" data-testid="cta-title">Join Our Growing Family</h2>
          <p data-testid="cta-description" className="lead mb-4">
            Experience the difference that quality agricultural solutions can make. Connect with us today 
            and discover how Vaishno Crop Science can help you achieve better yields, healthier crops, 
            and sustainable farming success.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="/contact" 
              className="btn-custom"
              data-testid="contact-cta-button"
            >
              Get In Touch
            </a>
            <a 
              href="/products" 
              className="nav-btn-circular"
              data-testid="products-cta-button"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}