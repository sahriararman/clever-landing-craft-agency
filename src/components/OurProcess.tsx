
import { useState } from 'react';
import { MessageCircle, Palette, Code, Rocket } from 'lucide-react';

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Initial consultation call",
        "Requirements gathering",
        "Market research",
        "Project timeline creation"
      ]
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Our designers create stunning visual concepts and interactive prototypes that bring your vision to life.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      details: [
        "Wireframe creation",
        "Visual design concepts",
        "Interactive prototypes",
        "Client feedback integration"
      ]
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "We build your website using modern technologies, ensuring it's fast, secure, and fully responsive.",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      details: [
        "Clean code development",
        "Responsive implementation",
        "Quality assurance testing",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support to ensure everything runs smoothly.",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      details: [
        "Domain & hosting setup",
        "Website deployment",
        "Training & documentation",
        "Ongoing maintenance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional websites that exceed your expectations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-16 h-16 rounded-full border-4 bg-white transition-all duration-300 hover:scale-110 ${
                      activeStep === index
                        ? 'border-blue-500 shadow-lg'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <IconComponent 
                      className={`w-6 h-6 mx-auto transition-colors duration-300 ${
                        activeStep === index ? 'text-blue-500' : 'text-gray-400'
                      }`} 
                    />
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between mt-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="text-center w-16"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    activeStep === index ? 'text-blue-500' : 'text-gray-500'
                  }`}>
                    {step.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center animate-scale-in`}>
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                    <span className="text-blue-500 font-medium">Step {steps[activeStep].id}</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className={`w-full h-64 lg:h-80 rounded-xl bg-gradient-to-br ${steps[activeStep].color} opacity-20 animate-pulse`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="w-24 h-24 text-gray-400 animate-scale-in" />;
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
