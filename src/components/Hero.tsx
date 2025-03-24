
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CurrencyConverter from './CurrencyConverter';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-wise-blue-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <div className="inline-flex items-center bg-wise-blue-50 border border-wise-blue-100 rounded-full px-4 py-1.5 text-sm text-wise-blue-800 font-medium animate-fade-in">
              <span className="flex h-2 w-2 bg-wise-teal-500 rounded-full mr-2"></span>
              The smarter way to send money internationally
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in appear-first">
              Send money abroad<br />
              <span className="bg-gradient-to-r from-wise-blue-800 to-wise-teal-500 bg-clip-text text-transparent">
                without the hidden fees
              </span>
            </h1>
            
            <p className="text-lg text-wise-blue-700 animate-fade-in-up appear-second">
              Save up to 6x compared to banks when you send money internationally. 
              We're on a mission to build money without borders: instant, convenient, 
              and eventually free.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up appear-third">
              <Button className="bg-wise-teal-500 hover:bg-wise-teal-600 text-white rounded-full px-6 h-12 text-base">
                Get started for free
              </Button>
              <Button variant="outline" className="group border-wise-blue-200 text-wise-blue-800 hover:bg-wise-blue-50 rounded-full px-6 h-12 text-base">
                See how it works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up appear-fourth">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-wise-green-DEFAULT mr-2" />
                <span className="text-sm text-wise-blue-700">No hidden fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-wise-green-DEFAULT mr-2" />
                <span className="text-sm text-wise-blue-700">Mid-market exchange rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-wise-green-DEFAULT mr-2" />
                <span className="text-sm text-wise-blue-700">10M+ happy customers</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in appear-second">
            <div className="absolute inset-0 bg-gradient-to-r from-wise-teal-100 to-wise-blue-100 rounded-3xl transform rotate-3 scale-95 opacity-30 animate-pulse-soft"></div>
            <div className="relative glass-card p-6 md:p-8 z-10">
              <CurrencyConverter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
