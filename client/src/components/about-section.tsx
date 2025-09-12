import { Leaf, Users, Award, Target, Heart, Shield } from 'lucide-react';

// Import agricultural images
import farmingHandsImage from '@assets/a1cded971e3f7e2416bef74a07a501f2_1757704522365.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="section" data-testid="about-section">
      {/* Mission, Vision, Values */}
      <div className="container">
        <h2 className="section-title" data-testid="about-title">About Vaishno Crop Science</h2>
        
        <div className="row mb-5">
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

        {/* Our Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-testid="story-content">
            <h3 className="text-primary mb-4" data-testid="story-title">Our Story</h3>
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

        {/* What Sets Us Apart */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-primary text-center mb-4" data-testid="differentiators-title">What Sets Us Apart</h3>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4" data-testid="quality-assurance">
                <div className="product-card text-center h-100">
                  <div className="product-card-body">
                    <Shield className="text-primary mb-3" size={40} data-testid="quality-icon" />
                    <h6 data-testid="quality-title">Quality Assurance</h6>
                    <p data-testid="quality-description" className="small">
                      Every product undergoes rigorous testing and quality control measures to ensure optimal results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4" data-testid="research-innovation">
                <div className="product-card text-center h-100">
                  <div className="product-card-body">
                    <Award className="text-success mb-3" size={40} data-testid="research-icon" />
                    <h6 data-testid="research-title">Research & Innovation</h6>
                    <p data-testid="research-description" className="small">
                      Continuous investment in R&D to develop cutting-edge agricultural solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4" data-testid="farmer-support">
                <div className="product-card text-center h-100">
                  <div className="product-card-body">
                    <Users className="text-danger mb-3" size={40} data-testid="support-icon" />
                    <h6 data-testid="support-title">Farmer Support</h6>
                    <p data-testid="support-description" className="small">
                      Comprehensive technical support and guidance to help farmers maximize their yields.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4" data-testid="sustainability">
                <div className="product-card text-center h-100">
                  <div className="product-card-body">
                    <Leaf className="text-success mb-3" size={40} data-testid="sustainability-icon" />
                    <h6 data-testid="sustainability-title">Sustainability</h6>
                    <p data-testid="sustainability-description" className="small">
                      Eco-friendly solutions that protect the environment while boosting productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-primary text-center mb-4" data-testid="statistics-title">Our Impact</h3>
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
        </div>
      </div>
    </section>
  );
}