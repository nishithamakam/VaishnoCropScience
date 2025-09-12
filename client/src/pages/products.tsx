const products = [
  {
    id: 1,
    name: "Premium Crop Fertilizers",
    subtitle: "Advanced Nutrient Solutions",
    description: "High-quality fertilizers designed to maximize crop yield and improve soil health through scientific formulation and organic compounds.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Premium Crop Fertilizers"
  },
  {
    id: 2,
    name: "Organic Pesticides",
    subtitle: "Eco-Friendly Protection",
    description: "Environmentally safe pesticides that protect crops from harmful insects while maintaining ecological balance and food safety standards.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Organic Pesticides"
  },
  {
    id: 3,
    name: "Hybrid Seeds",
    subtitle: "High-Yield Varieties",
    description: "Genetically improved seeds engineered for enhanced productivity, disease resistance, and adaptability to various climatic conditions.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Hybrid Seeds"
  },
  {
    id: 4,
    name: "Soil Conditioners",
    subtitle: "Soil Health Enhancement",
    description: "Advanced soil conditioning agents that improve soil structure, water retention, and nutrient availability for optimal plant growth.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Soil Conditioners"
  },
  {
    id: 5,
    name: "Growth Promoters",
    subtitle: "Plant Development Enhancers",
    description: "Scientific growth promoters that accelerate plant development, improve root systems, and enhance overall crop performance and quality.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Growth Promoters"
  },
  {
    id: 6,
    name: "Water Management Solutions",
    subtitle: "Efficient Irrigation Systems",
    description: "Smart irrigation technologies and water conservation systems designed to optimize water usage and improve crop irrigation efficiency.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Water Management Solutions"
  }
];

export default function Products() {
  return (
    <div data-testid="products-page">
      <section className="section" style={{ marginTop: '80px' }}>
        <div className="container">
          <h2 className="section-title" data-testid="products-title">Our Agricultural Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6" data-testid={`product-card-${product.id}`}>
                <div className="product-card">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    data-testid={`product-image-${product.id}`}
                  />
                  <div className="product-card-body">
                    <h5 data-testid={`product-name-${product.id}`}>{product.name}</h5>
                    <p className="subtitle" data-testid={`product-subtitle-${product.id}`}>{product.subtitle}</p>
                    <p data-testid={`product-description-${product.id}`}>{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
