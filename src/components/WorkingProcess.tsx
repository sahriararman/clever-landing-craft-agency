
import { MessageSquare, Code, TestTube } from 'lucide-react';

const WorkingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initiation & Planning",
      description: "We are architects innovation trailblazers of technological advancement",
      icon: MessageSquare,
      color: "from-blue-500 to-purple-600"
    },
    {
      number: "02",
      title: "Execution & Development",
      description: "We are architects innovation trailblazers of technological advancement",
      icon: Code,
      color: "from-purple-500 to-blue-600"
    },
    {
      number: "03",
      title: "Testing & Maintenance",
      description: "We are architects innovation trailblazers of technological advancement",
      icon: TestTube,
      color: "from-blue-600 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our working process on how
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            to grow your business
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Dotted line connector */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-gray-300"></div>
            
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step number */}
                  <div className="text-gray-300 text-6xl font-bold mb-6">
                    {step.number}
                  </div>
                  
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-lg flex items-center justify-center relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
