
import { Code, Palette, Smartphone, Globe, Search, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LocationData } from '@/data/locationData';

interface LocationServicesProps {
  locationData: LocationData;
}

const LocationServices = ({ locationData }: LocationServicesProps) => {
  const processText = (text: string): string => {
    return text.replace(/\(Location\)/g, locationData.name);
  };

  const services = [
    {
      icon: Code,
      title: processText('Web Development in (Location)'),
      description: processText('Professional web development services in (Location). We create custom websites and web applications that deliver exceptional user experiences for (Location) businesses.'),
      features: [
        processText('Custom websites for (Location) businesses'),
        processText('Local (Location) market expertise'),
        'Responsive design',
        'SEO optimization'
      ],
      slug: 'web-development'
    },
    {
      icon: Palette,
      title: processText('Web Design in (Location)'),
      description: processText('Creative web design solutions in (Location). Our design team creates visually stunning websites that represent your brand and connect with (Location) customers.'),
      features: [
        processText('(Location)-focused design approach'),
        'User experience optimization',
        'Brand identity integration',
        'Modern design trends'
      ],
      slug: 'web-design'
    },
    {
      icon: Smartphone,
      title: processText('Mobile App Development in (Location)'),
      description: processText('Native and cross-platform mobile app development in (Location). We build iOS and Android apps that engage (Location) users and drive business growth.'),
      features: [
        processText('iOS and Android apps for (Location)'),
        'Cross-platform development',
        'App store optimization',
        'Local user testing'
      ],
      slug: 'mobile-development'
    },
    {
      icon: Globe,
      title: processText('Digital Solutions in (Location)'),
      description: processText('Comprehensive digital solutions for (Location) businesses. From strategy to implementation, we help (Location) companies succeed in the digital landscape.'),
      features: [
        processText('(Location) market analysis'),
        'Digital strategy consulting',
        'Technology integration',
        'Ongoing support'
      ],
      slug: 'digital-solutions'
    },
    {
      icon: Search,
      title: processText('SEO Services in (Location)'),
      description: processText('Search engine optimization services in (Location). We help (Location) businesses rank higher in local search results and attract more customers.'),
      features: [
        processText('Local (Location) SEO'),
        'Keyword research',
        'Content optimization',
        'Performance tracking'
      ],
      slug: 'seo-services'
    },
    {
      icon: ShoppingCart,
      title: processText('E-commerce in (Location)'),
      description: processText('E-commerce solutions for (Location) retailers. We build online stores that help (Location) businesses sell products and services effectively online.'),
      features: [
        processText('(Location) payment integration'),
        'Inventory management',
        'Order processing',
        'Customer support'
      ],
      slug: 'ecommerce'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {processText('Our Services in (Location)')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {processText('Comprehensive web development and digital solutions for (Location) businesses. We help companies in (Location) succeed online.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <Link to={`/services/${service.slug}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationServices;
