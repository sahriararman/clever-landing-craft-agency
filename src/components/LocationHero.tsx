
import { ArrowRight, Code, Palette, Zap, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LocationData } from '@/data/locationData';

interface LocationHeroProps {
  locationData: LocationData;
}

const LocationHero = ({ locationData }: LocationHeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-lg font-medium">{locationData.name}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {locationData.title.split(' ').slice(0, -2).join(' ')}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {locationData.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {locationData.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
              Get Started in {locationData.name}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:border-blue-600 hover:text-blue-600">
              View Local Portfolio
            </Button>
          </div>

          {/* Local Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600 mt-8">
            {locationData.phoneNumber && (
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{locationData.phoneNumber}</span>
              </div>
            )}
            {locationData.email && (
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{locationData.email}</span>
              </div>
            )}
          </div>

          {/* Local Features */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Us in {locationData.name}?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locationData.localFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 text-center text-sm">
                Deep understanding of {locationData.name}'s business landscape and customer needs.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-purple-100 rounded-full">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Regional Design</h3>
              <p className="text-gray-600 text-center text-sm">
                Designs that resonate with {locationData.name} audiences and local market trends.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-green-100 rounded-full">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Local Support</h3>
              <p className="text-gray-600 text-center text-sm">
                Dedicated {locationData.name} support team in your timezone for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
