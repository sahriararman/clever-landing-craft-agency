
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
