
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import LocationHero from '@/components/LocationHero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { locationData } from '@/data/locationData';
import { useEffect } from 'react';

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  
  // Get location data or use default
  const currentLocation = location ? locationData[location.toLowerCase()] : null;
  
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // If location not found, redirect to 404 or show default
  if (!currentLocation) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 text-center">
          <h1 className="text-2xl">Location not found</h1>
          <p>We don't currently serve this location.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <LocationHero locationData={currentLocation} />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LocationPage;
