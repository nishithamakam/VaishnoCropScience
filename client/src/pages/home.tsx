import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
