
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ComparisonItem: React.FC<{
  title: string;
  swapster: boolean | string;
  banks: boolean | string;
  highlight?: boolean;
}> = ({ title, swapster, banks, highlight = false }) => {
  return (
    <div className={`grid grid-cols-3 py-4 ${highlight ? 'bg-wise-blue-50 rounded-xl' : ''}`}>
      <div className="col-span-1 px-4 flex items-center">
        <span className="text-wise-blue-800 font-medium">{title}</span>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {typeof swapster === 'boolean' ? (
          swapster ? (
            <Check className="h-5 w-5 text-wise-green-DEFAULT" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )
        ) : (
          <span className="text-wise-blue-800 font-medium">{swapster}</span>
        )}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {typeof banks === 'boolean' ? (
          banks ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )
        ) : (
          <span className="text-wise-blue-700">{banks}</span>
        )}
      </div>
    </div>
  );
};

const Comparison: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-wise-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wise-blue-900">
            How we compare to banks
          </h2>
          <p className="text-lg text-wise-blue-700">
            See why millions of people are switching to Swapster for international transfers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-subtle overflow-hidden border border-gray-100">
          <div className="grid grid-cols-3 py-4 bg-wise-blue-800 text-white">
            <div className="col-span-1 px-4">
              <span className="font-medium">Feature comparison</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="font-medium">Swapster</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="font-medium">Traditional banks</span>
            </div>
          </div>
          
          <ComparisonItem 
            title="Real exchange rate" 
            swapster={true} 
            banks={false} 
            highlight={true}
          />
          <ComparisonItem 
            title="Low, transparent fee" 
            swapster={true} 
            banks={false}
          />
          <ComparisonItem 
            title="Fee on exchange rate" 
            swapster="None" 
            banks="3-6%"
            highlight={true} 
          />
          <ComparisonItem 
            title="Fast transfers" 
            swapster="65% within 1 hour" 
            banks="3-5 business days"
          />
          <ComparisonItem 
            title="Price comparison shown" 
            swapster={true} 
            banks={false}
            highlight={true}
          />
          <ComparisonItem 
            title="Multi-currency account" 
            swapster={true} 
            banks={true}
          />
          
          <div className="py-8 px-4 text-center bg-wise-blue-50">
            <p className="text-wise-blue-800 font-medium mb-4">
              Join over 10 million customers who save when sending money with Swapster
            </p>
            <Button className="bg-wise-teal-500 hover:bg-wise-teal-600 text-white rounded-full px-6">
              Get started for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
