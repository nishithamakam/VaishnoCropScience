import { BookOpen, Download, Leaf, TrendingUp, Calendar, Users, FileText, Lightbulb, Sprout, Droplets, Sun, Cloud } from 'lucide-react';

// Import agricultural images
import riceFieldImage from '@assets/1a062644fd9309daddd1764a29458335_1757703904284.jpg';
import farmingHandsImage from '@assets/a1cded971e3f7e2416bef74a07a501f2_1757704522365.jpg';
import wheatGrainsImage from '@assets/9077dd55ebc0b7ce6e355aa8fe6dcca9 (1)_1757704522522.jpg';
import riceGrainsImage from '@assets/5768607b3115c7d9eccce0b39ea1c320_1757704522498.jpg';

const farmingGuides = [
  {
    id: 1,
    title: "Rice Cultivation Guide",
    description: "Complete guide covering rice variety selection, land preparation, transplanting techniques, water management, and harvesting best practices.",
    category: "Crop Cultivation",
    downloadSize: "2.5 MB",
    icon: <Sprout className="text-primary" size={24} />
  },
  {
    id: 2,
    title: "Wheat Farming Manual",
    description: "Comprehensive manual on wheat cultivation including soil preparation, seeding methods, fertilizer application, and post-harvest handling.",
    category: "Crop Cultivation",
    downloadSize: "3.1 MB",
    icon: <Leaf className="text-success" size={24} />
  },
  {
    id: 3,
    title: "Organic Farming Practices",
    description: "Step-by-step guide to organic farming methods, natural pest control, composting techniques, and organic certification processes.",
    category: "Sustainable Agriculture",
    downloadSize: "1.8 MB",
    icon: <TrendingUp className="text-success" size={24} />
  },
  {
    id: 4,
    title: "Water Management Systems",
    description: "Modern irrigation techniques, water conservation methods, drip irrigation setup, and efficient water usage strategies for farmers.",
    category: "Water Management",
    downloadSize: "2.2 MB",
    icon: <Droplets className="text-primary" size={24} />
  }
];

const technicalResources = [
  {
    id: 1,
    title: "Soil Testing & Analysis",
    description: "Understanding soil pH, nutrient levels, and soil health indicators for optimal crop production.",
    type: "Technical Guide",
    icon: <FileText className="text-primary" size={24} />
  },
  {
    id: 2,
    title: "Pest Management Protocols",
    description: "Integrated pest management strategies, identification guides, and treatment protocols for common crop pests.",
    type: "Technical Guide",
    icon: <Lightbulb className="text-danger" size={24} />
  },
  {
    id: 3,
    title: "Fertilizer Application Charts",
    description: "Detailed charts for optimal fertilizer application rates, timing, and methods for different crops and soil conditions.",
    type: "Reference Material",
    icon: <TrendingUp className="text-success" size={24} />
  },
  {
    id: 4,
    title: "Weather Impact Guidelines",
    description: "Strategies for managing crops during adverse weather conditions and climate change adaptation techniques.",
    type: "Advisory",
    icon: <Cloud className="text-primary" size={24} />
  }
];

const seasonalTips = [
  {
    season: "Spring",
    title: "Spring Preparation",
    tips: ["Soil preparation and testing", "Seed selection and treatment", "Planning crop rotation", "Equipment maintenance"],
    icon: <Sprout className="text-success" size={32} />
  },
  {
    season: "Summer",
    title: "Summer Care",
    tips: ["Water management optimization", "Pest and disease monitoring", "Fertilizer application", "Heat stress prevention"],
    icon: <Sun className="text-warning" size={32} />
  },
  {
    season: "Monsoon",
    title: "Monsoon Management",
    tips: ["Drainage system maintenance", "Fungal disease prevention", "Nutrient management", "Crop protection measures"],
    icon: <Cloud className="text-primary" size={32} />
  },
  {
    season: "Winter",
    title: "Winter Strategies",
    tips: ["Cold protection methods", "Harvest planning", "Storage preparation", "Next season planning"],
    icon: <Leaf className="text-primary" size={32} />
  }
];

export default function Resources() {
  return (
    <div data-testid="resources-page">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${riceFieldImage})`,
          minHeight: '70vh',
          marginTop: '80px'
        }}
        data-testid="resources-hero-section"
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 data-testid="resources-hero-title" className="font-display">
              Agricultural Resources & Knowledge Center
            </h1>
            <p data-testid="resources-hero-description" className="lead">
              Comprehensive guides, research papers, technical resources, and expert advice to help farmers 
              achieve sustainable productivity and agricultural excellence.
            </p>
            <div className="mt-4">
              <a 
                href="#farming-guides" 
                className="btn-custom me-3"
                data-testid="explore-resources-button"
              >
                <BookOpen className="me-2" size={20} />
                Explore Resources
              </a>
              <a 
                href="#downloads" 
                className="nav-btn-circular"
                data-testid="download-guides-button"
              >
                <Download className="me-2" size={16} />
                Download Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Guides Section */}
      <section id="farming-guides" className="section" data-testid="farming-guides-section">
        <div className="container">
          <h2 className="section-title" data-testid="farming-guides-title">Comprehensive Farming Guides</h2>
          <p className="text-center text-muted mb-5" data-testid="farming-guides-subtitle">
            Download our detailed farming guides covering all aspects of modern agricultural practices
          </p>
          <div className="row">
            {farmingGuides.map((guide) => (
              <div key={guide.id} className="col-lg-6 col-md-6 mb-4" data-testid={`farming-guide-${guide.id}`}>
                <div className="product-card h-100">
                  <div className="product-card-body">
                    <div className="d-flex align-items-start mb-3">
                      {guide.icon}
                      <div className="ms-3">
                        <h5 data-testid={`guide-title-${guide.id}`}>{guide.title}</h5>
                        <span className="badge bg-primary mb-2" data-testid={`guide-category-${guide.id}`}>
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <p data-testid={`guide-description-${guide.id}`}>{guide.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted" data-testid={`guide-size-${guide.id}`}>
                        Size: {guide.downloadSize}
                      </small>
                      <button 
                        className="nav-btn-circular"
                        data-testid={`download-guide-${guide.id}`}
                      >
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Resources Section */}
      <section className="section bg-light" data-testid="technical-resources-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-testid="technical-resources-content">
              <h2 className="section-title text-left" data-testid="technical-resources-title">Technical Resources</h2>
              <p className="lead mb-4" data-testid="technical-resources-description">
                Access our collection of technical guides, reference materials, and expert protocols designed 
                to help you implement advanced agricultural techniques and troubleshoot common farming challenges.
              </p>
              <div className="row">
                {technicalResources.map((resource) => (
                  <div key={resource.id} className="col-md-6 mb-3" data-testid={`technical-resource-${resource.id}`}>
                    <div className="d-flex align-items-start">
                      {resource.icon}
                      <div className="ms-3">
                        <h6 data-testid={`resource-title-${resource.id}`}>{resource.title}</h6>
                        <p className="small text-muted mb-1" data-testid={`resource-description-${resource.id}`}>
                          {resource.description}
                        </p>
                        <span className="badge bg-secondary" data-testid={`resource-type-${resource.id}`}>
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-testid="farming-hands-image-section">
              <img 
                src={farmingHandsImage} 
                alt="Farmer's hands holding young rice plants"
                className="img-fluid rounded shadow-lg"
                data-testid="farming-hands-img"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers & Studies Section */}
      <section className="section" data-testid="research-papers-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2" data-testid="research-papers-content">
              <h2 className="section-title text-left" data-testid="research-papers-title">Research Papers & Studies</h2>
              <p className="lead mb-4" data-testid="research-papers-description">
                Stay updated with the latest agricultural research, scientific studies, and industry reports 
                that drive innovation in modern farming practices.
              </p>
              <div className="mb-4">
                <h5 data-testid="recent-studies-title">Recent Studies</h5>
                <ul className="list-unstyled" data-testid="recent-studies-list">
                  <li className="mb-2" data-testid="study-1">
                    <strong>Impact of Organic Fertilizers on Soil Microbiome</strong><br />
                    <small className="text-muted">Published in Journal of Agricultural Science - March 2024</small>
                  </li>
                  <li className="mb-2" data-testid="study-2">
                    <strong>Climate-Resilient Crop Varieties for Indian Agriculture</strong><br />
                    <small className="text-muted">Agricultural Research Institute - February 2024</small>
                  </li>
                  <li className="mb-2" data-testid="study-3">
                    <strong>Water Conservation Techniques in Semi-Arid Regions</strong><br />
                    <small className="text-muted">International Water Management Research - January 2024</small>
                  </li>
                  <li className="mb-2" data-testid="study-4">
                    <strong>Integrated Pest Management: A Sustainable Approach</strong><br />
                    <small className="text-muted">Crop Protection Journal - December 2023</small>
                  </li>
                </ul>
              </div>
              <button className="btn-custom" data-testid="view-all-research-button">
                <FileText className="me-2" size={20} />
                View All Research
              </button>
            </div>
            <div className="col-lg-6 order-lg-1" data-testid="wheat-grains-image-section">
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

      {/* Seasonal Tips Section */}
      <section className="section bg-light" data-testid="seasonal-tips-section">
        <div className="container">
          <h2 className="section-title" data-testid="seasonal-tips-title">Seasonal Farming Tips</h2>
          <p className="text-center text-muted mb-5" data-testid="seasonal-tips-subtitle">
            Expert advice tailored to each season to help you maximize your agricultural productivity year-round
          </p>
          <div className="row">
            {seasonalTips.map((season, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4" data-testid={`seasonal-tip-${season.season.toLowerCase()}`}>
                <div className="product-card text-center h-100">
                  <div className="product-card-body">
                    <div className="mb-3" data-testid={`season-icon-${season.season.toLowerCase()}`}>
                      {season.icon}
                    </div>
                    <h5 data-testid={`season-title-${season.season.toLowerCase()}`}>{season.title}</h5>
                    <p className="subtitle mb-3" data-testid={`season-name-${season.season.toLowerCase()}`}>
                      {season.season}
                    </p>
                    <ul className="list-unstyled text-start" data-testid={`season-tips-${season.season.toLowerCase()}`}>
                      {season.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="mb-1" data-testid={`tip-${season.season.toLowerCase()}-${tipIndex + 1}`}>
                          <small>• {tip}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="section" data-testid="best-practices-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-testid="best-practices-content">
              <h2 className="section-title text-left" data-testid="best-practices-title">Agricultural Best Practices</h2>
              <p className="lead mb-4" data-testid="best-practices-description">
                Implement proven best practices that have been tested and refined by agricultural experts 
                and successful farmers across different regions and crop types.
              </p>
              <div className="row">
                <div className="col-md-6 mb-4" data-testid="sustainable-farming-practice">
                  <div className="d-flex align-items-start">
                    <Leaf className="text-success me-3 mt-1" size={24} />
                    <div>
                      <h6 data-testid="sustainable-farming-title">Sustainable Farming</h6>
                      <p className="small" data-testid="sustainable-farming-description">
                        Implement eco-friendly practices that preserve soil health and promote long-term productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="precision-agriculture-practice">
                  <div className="d-flex align-items-start">
                    <TrendingUp className="text-primary me-3 mt-1" size={24} />
                    <div>
                      <h6 data-testid="precision-agriculture-title">Precision Agriculture</h6>
                      <p className="small" data-testid="precision-agriculture-description">
                        Use technology and data-driven approaches to optimize resource utilization and crop yields.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="crop-rotation-practice">
                  <div className="d-flex align-items-start">
                    <Calendar className="text-warning me-3 mt-1" size={24} />
                    <div>
                      <h6 data-testid="crop-rotation-title">Crop Rotation</h6>
                      <p className="small" data-testid="crop-rotation-description">
                        Plan strategic crop rotations to maintain soil fertility and reduce pest problems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" data-testid="water-conservation-practice">
                  <div className="d-flex align-items-start">
                    <Droplets className="text-primary me-3 mt-1" size={24} />
                    <div>
                      <h6 data-testid="water-conservation-title">Water Conservation</h6>
                      <p className="small" data-testid="water-conservation-description">
                        Adopt efficient irrigation methods and water management strategies to reduce waste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-testid="rice-grains-image-section">
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

      {/* Expert Advice Section */}
      <section className="section bg-light" data-testid="expert-advice-section">
        <div className="container">
          <h2 className="section-title" data-testid="expert-advice-title">Expert Advice & Consultation</h2>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-4" data-testid="agronomist-consultation">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <Users className="text-primary mb-3" size={48} data-testid="agronomist-icon" />
                  <h5 data-testid="agronomist-title">Agronomist Consultation</h5>
                  <p data-testid="agronomist-description">
                    Get personalized advice from certified agronomists on crop selection, 
                    soil management, and farming techniques.
                  </p>
                  <button className="nav-btn-circular" data-testid="book-agronomist-button">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="technical-support">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <Lightbulb className="text-warning mb-3" size={48} data-testid="technical-support-icon" />
                  <h5 data-testid="technical-support-title">Technical Support</h5>
                  <p data-testid="technical-support-description">
                    Receive technical assistance for equipment, irrigation systems, 
                    and modern farming technologies.
                  </p>
                  <button className="nav-btn-circular" data-testid="get-technical-support-button">
                    Get Support
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-testid="training-workshops">
              <div className="product-card h-100">
                <div className="product-card-body">
                  <BookOpen className="text-success mb-3" size={48} data-testid="training-icon" />
                  <h5 data-testid="training-title">Training Workshops</h5>
                  <p data-testid="training-description">
                    Join our hands-on training workshops covering latest agricultural 
                    practices and sustainable farming methods.
                  </p>
                  <button className="nav-btn-circular" data-testid="join-training-button">
                    Join Training
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="downloads" className="section" data-testid="downloads-cta-section">
        <div className="container text-center">
          <h2 className="section-title" data-testid="downloads-cta-title">Access Our Complete Resource Library</h2>
          <p className="lead mb-4" data-testid="downloads-cta-description">
            Download comprehensive guides, access research papers, and get expert advice to transform 
            your farming practices and achieve sustainable agricultural success.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="/contact" 
              className="btn-custom"
              data-testid="contact-expert-button"
            >
              <Users className="me-2" size={20} />
              Contact an Expert
            </a>
            <button 
              className="nav-btn-circular"
              data-testid="download-all-resources-button"
            >
              <Download className="me-2" size={16} />
              Download All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}