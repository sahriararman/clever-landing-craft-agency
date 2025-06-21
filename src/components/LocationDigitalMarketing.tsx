
import { Search, Globe, Share2 } from 'lucide-react';
import { LocationData } from '@/data/locationData';

interface LocationDigitalMarketingProps {
  locationData: LocationData;
}

const LocationDigitalMarketing = ({ locationData }: LocationDigitalMarketingProps) => {
  const processText = (text: string): string => {
    return text.replace(/\(Location\)/g, locationData.name);
  };

  const services = [
    {
      icon: Search,
      title: processText('Search Engine Optimization - SEO in (Location)'),
      description: processText('Our digital marketing services include competitive SEO implementation to ensure your website performs well on major search engines in (Location). We stay on top of algorithm updates and implement data-driven SEO tactics specifically for (Location) businesses, including in-depth keyword research and optimization, content marketing and link building to boost your organic traffic and put your (Location) website at the top of the search engine results pages.'),
      highlights: ['competitive SEO', 'web design and development team', processText('(Location) businesses')]
    },
    {
      icon: Globe,
      title: processText('Web Design and Development in (Location)'),
      description: processText('Your website is your digital storefront in (Location) – make it unforgettable. Our digital marketing agency has a web design and development team that collaborates with digital marketing experts to develop high-performing websites for (Location) businesses. We blend your vision with the latest design concepts and ensure your site reflects your brand identity and offers a frictionless experience from home page to checkout for (Location) customers. Let\'s talk about your next project in (Location).'),
      highlights: [processText('web design and development team'), processText('(Location) businesses')]
    },
    {
      icon: Share2,
      title: processText('Social Media Marketing in (Location)'),
      description: processText('Create more lead-generation channels by employing profitable social media campaigns in (Location). Included in our digital marketing services is social media marketing solutions specifically designed for (Location) businesses. Our dedicated social media team and digital marketing experts work together to position your brand in front of your (Location) audience. We help you define your voice and brand presence and launch campaigns with real ROI through data-driven digital marketing tailored for the (Location) market.'),
      highlights: [processText('social media marketing solutions'), processText('(Location) businesses')]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-gray-700">{processText('Digital Marketing in (Location)')}</span>{' '}
            <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {processText('Outrank Your Competition in (Location) With the Right Team Behind You')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="text-gray-600 leading-relaxed">
                  {service.description.split('.').map((sentence, sentenceIndex) => {
                    if (!sentence.trim()) return null;
                    
                    let processedSentence = sentence.trim() + '.';
                    
                    // Highlight specific terms in green
                    service.highlights.forEach(highlight => {
                      const regex = new RegExp(`(${highlight})`, 'gi');
                      processedSentence = processedSentence.replace(regex, `<span class="text-green-600 font-medium underline">$1</span>`);
                    });
                    
                    return (
                      <p key={sentenceIndex} className="mb-3" dangerouslySetInnerHTML={{ __html: processedSentence }} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationDigitalMarketing;
