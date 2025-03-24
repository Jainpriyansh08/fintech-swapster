
import React from 'react';
import { 
  Globe, 
  Shield, 
  Smartphone, 
  CreditCard, 
  PiggyBank, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-wise-teal-500" />,
    title: "Send money to 80+ countries",
    description: "Transfer money to bank accounts in over 80 countries worldwide, quickly and securely."
  },
  {
    icon: <Shield className="h-8 w-8 text-wise-blue-700" />,
    title: "Bank-level security",
    description: "Your money is protected with industry-standard encryption and secure data storage."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-wise-purple" />,
    title: "Easy mobile experience",
    description: "Send, track, and receive money on-the-go with our intuitive mobile app."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-wise-teal-500" />,
    title: "Multi-currency account",
    description: "Hold and manage money in 50+ currencies with your own local account details."
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-wise-blue-700" />,
    title: "Low, transparent fees",
    description: "Always know exactly what you're paying with our upfront fee structure."
  },
  {
    icon: <Zap className="h-8 w-8 text-wise-purple" />,
    title: "Fast transfers",
    description: "65% of our transfers are delivered instantly or within one hour."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wise-blue-900">
            The wiser way to move your money globally
          </h2>
          <p className="text-lg text-wise-blue-700">
            Built for people who travel, live and work abroad. Designed for international lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-gray-100 shadow-subtle hover:shadow-elevated transition-shadow bg-white group"
            >
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-wise-blue-50 group-hover:bg-wise-teal-50 transition-colors mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-wise-blue-900">{feature.title}</h3>
              <p className="text-wise-blue-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
