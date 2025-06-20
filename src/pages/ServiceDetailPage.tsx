
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Monitor, Smartphone, ShoppingCart, Layers, Database, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const services = {
    'web-development': {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
      detailedDescription: 'Our web development services focus on creating modern, responsive websites and web applications that deliver exceptional user experiences. We use cutting-edge technologies and follow best practices to ensure your digital presence is fast, secure, and scalable.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      benefits: [
        'Fast loading times and optimal performance',
        'Mobile-first responsive design',
        'Search engine optimization',
        'Scalable architecture',
        'Secure and reliable hosting'
      ]
    },
    'mobile-apps': {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications that deliver native performance and user experience.',
      features: ['iOS & Android', 'React Native', 'App Store Ready'],
      detailedDescription: 'We develop cross-platform mobile applications that work seamlessly on both iOS and Android devices. Our apps are built with React Native, ensuring native performance while maintaining a single codebase.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'App Store Connect'],
      benefits: [
        'Single codebase for both platforms',
        'Native performance and user experience',
        'App store submission assistance',
        'Push notifications and analytics',
        'Offline functionality support'
      ]
    },
    'ecommerce-solutions': {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard'],
      detailedDescription: 'Our e-commerce solutions provide everything you need to sell online. From product catalogs to secure payments and order management, we build comprehensive online stores that drive sales.',
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Analytics'],
      benefits: [
        'Secure payment processing',
        'Inventory management system',
        'Customer account portals',
        'Sales analytics and reporting',
        'Mobile-optimized checkout'
      ]
    },
    'ui-ux-design': {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      detailedDescription: 'Our UI/UX design process focuses on understanding your users and creating interfaces that are both beautiful and functional. We conduct thorough research and testing to ensure optimal user experiences.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      benefits: [
        'User-centered design approach',
        'Improved conversion rates',
        'Enhanced user satisfaction',
        'Accessibility compliance',
        'Brand consistency across platforms'
      ]
    },
    'backend-development': {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud infrastructure.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment'],
      detailedDescription: 'We build robust backend systems that power your applications. Our solutions include API development, database design, and cloud infrastructure setup for maximum reliability and scalability.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
      benefits: [
        'Scalable server architecture',
        'Secure data handling',
        'API integration capabilities',
        'Cloud-based infrastructure',
        'Real-time data processing'
      ]
    },
    'digital-strategy': {
      icon: Rocket,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies to accelerate your business growth.',
      features: ['Market Analysis', 'Technology Consulting', 'Growth Planning'],
      detailedDescription: 'Our digital strategy services help you navigate the digital landscape and identify opportunities for growth. We provide strategic consulting to align technology with your business objectives.',
      technologies: ['Analytics Tools', 'CRM Systems', 'Marketing Automation', 'Business Intelligence'],
      benefits: [
        'Data-driven decision making',
        'Competitive advantage analysis',
        'Technology roadmap planning',
        'ROI optimization',
        'Digital transformation guidance'
      ]
    }
  };

  const service = serviceSlug ? services[serviceSlug as keyof typeof services] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 text-center">
          <h1 className="text-2xl">Service not found</h1>
          <p>The requested service does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="w-24 h-24 mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                <IconComponent className="w-full h-full text-blue-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {service.detailedDescription}
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.technologies.map((tech, index) => (
                    <Card key={index} className="p-4 text-center">
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our {service.title}?</h2>
              <p className="text-xl text-gray-600">The benefits you'll get from our service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="pt-0">
                    <div className="w-12 h-12 mx-auto mb-4 p-3 bg-blue-100 rounded-full">
                      <div className="w-full h-full bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Let's discuss how we can help you with {service.title.toLowerCase()}</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Contact Us Today
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
