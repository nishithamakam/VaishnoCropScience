import { BookOpen, Download, Leaf, TrendingUp, Calendar, Users, FileText, Lightbulb, Sprout, Droplets, Sun, Cloud } from 'lucide-react';

// Import agricultural images
import riceFieldImage from '@assets/home1.jpg';
import farmingHandsImage from '@assets/home2.jpg';
import wheatGrainsImage from '@assets/home3.jpg';
import riceGrainsImage from '@assets/home4.jpg';
  
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
         
          </div>
        </div>
      </section> 
      </div>
  );
}