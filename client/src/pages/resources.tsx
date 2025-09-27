import { BookOpen, Download, Leaf, TrendingUp, Calendar, Users, FileText, Lightbulb, Sprout, Droplets, Sun, Cloud } from 'lucide-react';

 
import riceFieldImage from '@assets/home1.jpg';
 
  
export default function Resources() {
  return (
    <div data-testid="resources-page">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${riceFieldImage})`,
          minHeight: '40vh',
          marginTop: '80px'
        }}
        data-testid="resources-hero-section"
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 data-testid="resources-hero-title" className="font-display" style={{ fontSize: '35px' }}>
              Agricultural Resources & Knowledge Center
            </h1>
            <p data-testid="resources-hero-description" className="text-xs max-w-lg mx-auto" style={{ fontSize: '14px' }}>
              To help farmers 
              achieve sustainable productivity and agricultural excellence.
            </p>
         
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-display mb-4" style={{ color: "var(--primary-green)" }}>
              Agricultural Resources
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded"></div>
          </div>

          {/* Simple Resource Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Crop Guides</h3>
              <p className="text-sm text-gray-600 mb-4">Essential farming guides and best practices</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Crop Calendar</h3>
              <p className="text-sm text-gray-600 mb-4">Seasonal planting and harvesting schedule</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Market Insights</h3>
              <p className="text-sm text-gray-600 mb-4">Latest agricultural market trends and prices</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}