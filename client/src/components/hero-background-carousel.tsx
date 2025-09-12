import { useState, useEffect } from 'react';

// Import all agricultural images
import image1 from "@assets/1a062644fd9309daddd1764a29458335_1757703904284.jpg";
import image2 from "@assets/5768607b3115c7d9eccce0b39ea1c320_1757704522498.jpg";
import image3 from "@assets/9077dd55ebc0b7ce6e355aa8fe6dcca9 (1)_1757704522522.jpg";
import image4 from "@assets/a1cded971e3f7e2416bef74a07a501f2_1757704522365.jpg";

const backgroundImages = [image1, image2, image3, image4];

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