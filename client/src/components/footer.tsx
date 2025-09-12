export default function Footer() {
  return (
    <footer className="footer" data-testid="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 data-testid="footer-social-heading">Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="social-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-testid="social-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="social-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-testid="social-youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 data-testid="footer-contact-heading">Contact Us</h5>
            <p data-testid="footer-phone-1">
              <i className="fas fa-phone me-2"></i>+91 98765 43210
            </p>
            <p data-testid="footer-phone-2">
              <i className="fas fa-phone me-2"></i>+91 87654 32109
            </p>
            <p data-testid="footer-email">
              <i className="fas fa-envelope me-2"></i>info@vaishnocropscience.com
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 data-testid="footer-location-heading">Location</h5>
            <p data-testid="footer-address">
              <i className="fas fa-map-marker-alt me-2"></i>
              123 Agricultural Complex<br />
              Green Valley, Agricultural Zone<br />
              State - 123456, India
            </p>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p data-testid="footer-copyright">
              &copy; 2024 Vaishno Crop Science. All rights reserved. | Cultivating Excellence in Agriculture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
