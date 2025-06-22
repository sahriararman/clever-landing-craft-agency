
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OurProcess from '@/components/OurProcess';
import WorkingProcess from '@/components/WorkingProcess';
import DigitalMarketing from '@/components/DigitalMarketing';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OurProcess />
      <WorkingProcess />
      <DigitalMarketing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
