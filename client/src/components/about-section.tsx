import React, { useState, useEffect,useRef } from 'react';
import { Leaf, Target, Heart, Mail, PackageOpen } from 'lucide-react';
// Import agricultural images as before if needed
import farmingHandsImage from '@assets/home3.jpg';
export default function AboutSection() {
  // Hook to animate numbers counting up in Impact section
  React.useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.dynamic-num');
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        let count = parseInt(counter.innerText.replace(/\D/g, ''), 10) || 0;
        const increment = Math.ceil(target / 200);

        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = count.toLocaleString() + (counter.innerText.includes('+') ? '+' : '');
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target.toLocaleString() + (counter.innerText.includes('+') ? '+' : '');
        }
      };
      updateCount();
    });
  }, []);

  // Animation on scroll for cards
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-slide-up').forEach(el => {
      observer.observe(el);
    });
  }, []);
  // Latest products for carousel
  const latestProducts = [
    {
      id: "mycin",
      name: "Mycin",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Accelerates plant growth and root development.",
    },
    {
      id: "bio-plus",
      name: "Bio Plus",
      image:
        "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Natural plant enhancer improving resistance.",
    },
    {
      id: "fungocare",
      name: "FungoCare",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Protects crops from fungal diseases.",
    },
    {
      id: "safeguard",
      name: "SafeGuard",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Defends crops against pests naturally.",
    },
    {
      id: "greengold",
      name: "GreenGold",
      image:
        "https://images.unsplash.com/photo-1439122955806-6c6a7e51b64b?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Boosts rice flowering and grain filling.",
    },
    {
      id: "greengold",
      name: "GreenGold",
      image:
        "https://images.unsplash.com/photo-1439122955806-6c6a7e51b64b?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Boosts rice flowering and grain filling.",
    },
    {
      id: "greengold",
      name: "GreenGold",
      image:
        "https://images.unsplash.com/photo-1439122955806-6c6a7e51b64b?auto=format&fit=crop&w=600&h=400",
      shortDesc: "Boosts rice flowering and grain filling.",
    },
    {
      id: "greengold",
      name: "GreenGold",
      image:
        "https://images.unsplash.com/photo-1439122955806-6c6a7e51b64b?auto=format&fit=crop&w=600&h=400",
      
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 320; // width + gap approx for one card
    let scrollPosition = 0;
    let direction = 1; // 1: scroll right, -1: scroll left

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    const interval = setInterval(() => {
      if (direction === 1) {
        if (scrollPosition < maxScrollLeft) {
          scrollPosition += scrollAmount;
        } else {
          direction = -1;
          scrollPosition -= scrollAmount;
        }
      } else {
        if (scrollPosition > 0) {
          scrollPosition -= scrollAmount;
        } else {
          direction = 1;
          scrollPosition += scrollAmount;
        }
      }

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  },[]);


  return (
    <>

      {/* Latest Products Section */}

       <section
        className="section latest-products-section overflow-hidden"
        data-testid="latest-products-section"
      >
        <div className="container">
          <h2 className="section-title text-center mb-8">Latest Products</h2>
          <div
            ref={carouselRef}
            className="latest-products-carousel"
          >
            {latestProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="latest-product-card"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <div className="latest-product-card-content">
                  <h3>{product.name}</h3>
                  <p>{product.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Know More Section */}
      <section id="about" className="section know-more-section" data-testid="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 know-more-content" data-testid="story-content">
              <div className="know-more-highlight">
                <h2 data-testid="story-title">Know More About Us</h2>
                <p data-testid="story-description-1" className="lead">
                      Vaishno Crop Science puts farmers first in every aspect of its business, offering a comprehensive range of agricultural solutions for crop health, soil fertility, and sustainable yield growth. Vaishno Crop Science empowers growers, 
                      from large-scale farms to home gardens, with products tailored to the needs of various crops such as rice, cotton, vegetables, and oil seeds.
                </p>
              </div>
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
    
      <section className="section our-impact-section pt-4 pb-4" data-testid="statistics-section">
        <div className="container">
          <h2 className="section-title" data-testid="statistics-title">Our Impact</h2>
          <br></br>
          <div className="row text-center justify-center gap-y-6">
            <div className="col-lg-3 col-md-6" data-testid="farmers-served">
              <div className="impact-number impact-number-blue dynamic-num" data-testid="farmers-count" data-target="1500">0+</div>
              <h6 className="impact-label" data-testid="farmers-label">Farmers Served</h6>
              <p className="impact-description" data-testid="farmers-description">Trusted by farmers across multiple states</p>
            </div>
            <div className="col-lg-3 col-md-6" data-testid="products-range">
              <div className="impact-number impact-number-green dynamic-num" data-testid="products-count" data-target="100">0+</div>
              <h6 className="impact-label" data-testid="products-label">Product Range</h6>
              <p className="impact-description" data-testid="products-description">Comprehensive agricultural solutions</p>
            </div>
            <div className="col-lg-3 col-md-6" data-testid="years-experience">
              <div className="impact-number impact-number-red dynamic-num" data-testid="years-count" data-target="9">0+</div>
              <h6 className="impact-label" data-testid="years-label">Years of Excellence</h6>
              <p className="impact-description" data-testid="years-description">Continuous innovation and growth</p>
            </div>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/about" className="btn-custom" data-testid="contact-cta-button">
              <Mail size={20} />
              <span>Know more</span>
            </a>
          </div>
          </div> 
        </div>
      </section>
      <br></br>
       <br></br>
  
      
    </>
  );
}
