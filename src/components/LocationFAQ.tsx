
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LocationData } from '@/data/locationData';

interface LocationFAQProps {
  locationData: LocationData;
}

const LocationFAQ = ({ locationData }: LocationFAQProps) => {
  const processText = (text: string): string => {
    return text.replace(/\(Location\)/g, locationData.name);
  };

  const faqs = [
    {
      question: processText('How long does it take to build a website in (Location)?'),
      answer: processText('The timeline for website development in (Location) typically ranges from 2-8 weeks, depending on the complexity and features required. Simple websites can be completed in 2-3 weeks, while more complex e-commerce or custom applications may take 6-8 weeks. We work closely with (Location) businesses to establish realistic timelines and keep you updated throughout the development process.')
    },
    {
      question: processText('What is the cost of web development services in (Location)?'),
      answer: processText('Web development costs in (Location) vary based on project scope, features, and complexity. Basic business websites start from $2,500, while custom e-commerce solutions and complex web applications can range from $5,000-$15,000+. We provide detailed quotes after understanding your specific needs and goals for your (Location) business.')
    },
    {
      question: processText('Do you provide ongoing support after launching my website in (Location)?'),
      answer: processText('Yes, we offer comprehensive ongoing support for all (Location) clients. This includes regular updates, security monitoring, backups, technical support, and maintenance. We understand that (Location) businesses need reliable support, so we provide various support packages to keep your website running smoothly.')
    },
    {
      question: processText('Can you help with SEO for my (Location) business?'),
      answer: processText('Absolutely! We specialize in local SEO for (Location) businesses. Our SEO services include keyword research specific to the (Location) market, local business optimization, content creation, and ongoing SEO monitoring. We help (Location) businesses rank higher in local search results and attract more customers.')
    },
    {
      question: processText('Do you work with businesses of all sizes in (Location)?'),
      answer: processText('Yes, we work with businesses of all sizes throughout (Location) - from startups and small local businesses to large enterprises. We tailor our services to meet the specific needs and budgets of each (Location) client, ensuring everyone receives high-quality web development solutions.')
    },
    {
      question: processText('What technologies do you use for web development in (Location)?'),
      answer: processText('We use modern, industry-standard technologies including React, TypeScript, Node.js, and various CMS platforms. For (Location) businesses, we select the best technology stack based on your specific requirements, scalability needs, and long-term goals. We ensure all websites are mobile-responsive and optimized for performance.')
    },
    {
      question: processText('Can you redesign my existing website for my (Location) business?'),
      answer: processText('Yes, we specialize in website redesigns for (Location) businesses. Whether you need a complete overhaul or just want to modernize your current site, we can help. We analyze your existing website, understand your (Location) market positioning, and create a fresh, modern design that better serves your customers and business goals.')
    },
    {
      question: processText('Do you provide e-commerce solutions for (Location) retailers?'),
      answer: processText('Yes, we develop comprehensive e-commerce solutions for (Location) retailers and businesses. Our e-commerce services include online store development, payment gateway integration, inventory management, and local shipping solutions tailored for the (Location) market. We help (Location) businesses sell online effectively and grow their digital presence.')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {processText('Frequently Asked Questions about Web Development in (Location)')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {processText('Common questions from (Location) businesses about our web development services')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;
