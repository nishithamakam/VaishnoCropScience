import { useState, useEffect } from 'react';

// Import all agricultural images
import image1 from "@assets/home4.jpg";
import image2 from "@assets/home5.jpg";
import image4 from "@assets/home2.jpg";
import image5 from "@assets/home3.jpg";
 

 

const backgroundImages = [image1, image2,image4,image5];

export default function HeroBackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero-background-carousel" data-testid="hero-background-carousel">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background-image ${
            index === currentImageIndex ? 'active' : ''
          } ${isLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
          data-testid={`hero-background-${index}`}
        />
      ))}
      
      {/* Carousel indicators */}
      <div className="hero-carousel-indicators" data-testid="hero-carousel-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel-indicator ${
              index === currentImageIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
            data-testid={`hero-indicator-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}