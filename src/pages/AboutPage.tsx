
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
