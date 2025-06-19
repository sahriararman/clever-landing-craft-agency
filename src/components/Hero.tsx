
import { ArrowRight, Code, Palette, Zap, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              We Build
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              That Convert
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We promise the best WordPress web design and development services. Transform your ideas into powerful web applications that engage users and drive results.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto py-8">
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <div className="flex items-center space-x-1 text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="text-3xl font-bold text-gray-900">350+</div>
              <div className="text-sm text-gray-600">5-star Google reviews</div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">2400+</div>
              <div className="text-sm text-gray-600">Happy clients</div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="text-3xl font-bold text-gray-900">40+</div>
              <div className="text-sm text-gray-600">In-house WordPress experts</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:border-blue-600 hover:text-blue-600">
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Clean Code</h3>
              <p className="text-gray-600 text-center text-sm">
                Maintainable, scalable, and performant code that stands the test of time.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-purple-100 rounded-full">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Modern Design</h3>
              <p className="text-gray-600 text-center text-sm">
                Beautiful, intuitive interfaces that delight users and drive engagement.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-green-100 rounded-full">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 text-center text-sm">
                Rapid development cycles with agile methodology for quick market entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
