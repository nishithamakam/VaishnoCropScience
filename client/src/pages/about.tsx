import { Leaf, Users, Award, Target, Heart, Shield } from 'lucide-react';

// Import agricultural images
import riceFieldImage from '@assets/1a062644fd9309daddd1764a29458335_1757703904284.jpg';
import riceGrainsImage from '@assets/5768607b3115c7d9eccce0b39ea1c320_1757704522498.jpg';
import farmingHandsImage from '@assets/a1cded971e3f7e2416bef74a07a501f2_1757704522365.jpg';
import wheatGrainsImage from '@assets/9077dd55ebc0b7ce6e355aa8fe6dcca9 (1)_1757704522522.jpg';

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
              Cultivating Excellence Since Our Foundation
            </h1>
            <p data-testid="about-hero-description" className="lead">
              At Vaishno Crop Science, we are dedicated to revolutionizing agriculture through innovative solutions, 
              sustainable practices, and unwavering commitment to farmer success across the nation.
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
                Vaishno Crop Science was born from a simple yet powerful vision: to transform the agricultural 
                landscape of India by providing farmers with access to world-class products and solutions.
              </p>
              <p data-testid="story-description-2">
                Founded by agricultural experts and scientists who understood the challenges faced by farmers, 
                our company has grown from a small initiative to a trusted partner for thousands of farmers 
                across the country. We combine traditional farming wisdom with modern scientific innovations 
                to create solutions that are both effective and sustainable.
              </p>
              <p data-testid="story-description-3">
                Our journey has been marked by continuous research, development, and a deep commitment to 
                understanding the unique needs of Indian agriculture. From premium fertilizers to organic 
                pesticides, every product we develop undergoes rigorous testing to ensure it meets the highest 
                standards of quality and effectiveness.
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

      {/* What Sets Us Apart */}
      <section className="section bg-light" data-testid="differentiators-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2" data-testid="differentiators-content">
              <h2 className="section-title text-left" data-testid="differentiators-title">What Sets Us Apart</h2>
              <div className="row">
                <div className="col-md-6 mb-4" data-testid="quality-assurance">
                  <div className="d-flex align-items-start">
                    <Shield className="text-primary me-3 mt-1" size={24} data-testid="quality-icon" />
                    <div>
                      <h6 data-testid="quality-title">Quality Assurance</h6>
                      <p data-testid="quality-description" className="small">
                        Every product undergoes rigorous testing and quality control measures to ensure optimal results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="research-innovation">
                  <div className="d-flex align-items-start">
                    <Award className="text-success me-3 mt-1" size={24} data-testid="research-icon" />
                    <div>
                      <h6 data-testid="research-title">Research & Innovation</h6>
                      <p data-testid="research-description" className="small">
                        Continuous investment in R&D to develop cutting-edge agricultural solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="farmer-support">
                  <div className="d-flex align-items-start">
                    <Users className="text-danger me-3 mt-1" size={24} data-testid="support-icon" />
                    <div>
                      <h6 data-testid="support-title">Farmer Support</h6>
                      <p data-testid="support-description" className="small">
                        Comprehensive technical support and guidance to help farmers maximize their yields.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="sustainability">
                  <div className="d-flex align-items-start">
                    <Leaf className="text-success me-3 mt-1" size={24} data-testid="sustainability-icon" />
                    <div>
                      <h6 data-testid="sustainability-title">Sustainability</h6>
                      <p data-testid="sustainability-description" className="small">
                        Eco-friendly solutions that protect the environment while boosting productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1" data-testid="wheat-grains-image">
              <img 
                src={wheatGrainsImage} 
                alt="Hands holding wheat grains with wheat stalks"
                className="img-fluid rounded shadow-lg"
                data-testid="wheat-grains-img"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section" data-testid="statistics-section">
        <div className="container">
          <h2 className="section-title" data-testid="statistics-title">Our Impact</h2>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4" data-testid="farmers-served">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <h3 className="text-primary font-weight-bold" data-testid="farmers-count">50,000+</h3>
                  <h6 data-testid="farmers-label">Farmers Served</h6>
                  <p data-testid="farmers-description" className="small text-muted">
                    Trusted by farmers across multiple states
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-testid="products-range">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <h3 className="text-success font-weight-bold" data-testid="products-count">200+</h3>
                  <h6 data-testid="products-label">Product Range</h6>
                  <p data-testid="products-description" className="small text-muted">
                    Comprehensive agricultural solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-testid="years-experience">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <h3 className="text-danger font-weight-bold" data-testid="years-count">15+</h3>
                  <h6 data-testid="years-label">Years of Excellence</h6>
                  <p data-testid="years-description" className="small text-muted">
                    Continuous innovation and growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-testid="states-coverage">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <h3 className="text-primary font-weight-bold" data-testid="states-count">25+</h3>
                  <h6 data-testid="states-label">States Covered</h6>
                  <p data-testid="states-description" className="small text-muted">
                    Pan-India presence and distribution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-light" data-testid="leadership-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-testid="leadership-content">
              <h2 className="section-title text-left" data-testid="leadership-title">Our Leadership</h2>
              <p data-testid="leadership-description-1" className="lead">
                Our experienced leadership team combines decades of agricultural expertise with business acumen 
                to guide Vaishno Crop Science toward continued growth and innovation.
              </p>
              <p data-testid="leadership-description-2">
                Led by industry veterans who have dedicated their careers to agricultural advancement, our team 
                brings together diverse backgrounds in agronomy, biochemistry, business management, and farmer 
                relations. This multidisciplinary approach ensures that every decision we make is grounded in 
                both scientific rigor and practical farming knowledge.
              </p>
              <p data-testid="leadership-description-3">
                Our commitment to transparency, ethical business practices, and farmer welfare drives our 
                leadership philosophy. We believe in building long-term relationships based on trust, 
                reliability, and mutual success.
              </p>
            </div>
            <div className="col-lg-6" data-testid="rice-grains-image">
              <img 
                src={riceGrainsImage} 
                alt="Rice grains in burlap sack with rice plants"
                className="img-fluid rounded shadow-lg"
                data-testid="rice-grains-img"
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