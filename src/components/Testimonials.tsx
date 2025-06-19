
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b169a704?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'DevCraft transformed our outdated website into a modern, high-performing platform. The team was professional, communicative, and delivered exceptional results on time.',
    },
    {
      name: 'Michael Chen',
      position: 'Founder, GreenEarth Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'Working with DevCraft was a game-changer for our business. They not only built us a beautiful website but also provided valuable insights on user experience and conversion optimization.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, FashionForward',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'The e-commerce platform DevCraft developed for us exceeded all expectations. Our online sales increased by 200% within the first three months of launch.',
    },
    {
      name: 'David Thompson',
      position: 'CTO, DataDriven Analytics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'DevCraft\'s technical expertise is outstanding. They built a complex data visualization platform that our clients love. The code quality and performance are top-notch.',
    },
    {
      name: 'Lisa Park',
      position: 'Owner, Wellness Center',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'From the initial consultation to the final launch, DevCraft made the entire process seamless. They understood our vision and brought it to life beautifully.',
    },
    {
      name: 'Robert Kim',
      position: 'Director, FinanceMax',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      content: 'Security and reliability were our top priorities, and DevCraft delivered on both. Our fintech application is robust, secure, and user-friendly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-blue-600 opacity-60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              Join 100+ satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
