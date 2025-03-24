
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeftRight, Info } from "lucide-react";
import { popularCurrencies, getExchangeRate, formatCurrency, type Currency } from '@/lib/currencyData';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simulate API call to get exchange rate
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate network delay
    const timer = setTimeout(() => {
      const rate = getExchangeRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
      setConvertedAmount(amount * rate);
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [fromCurrency, toCurrency, amount]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getCurrencyByCode = (code: string): Currency | undefined => {
    return popularCurrencies.find(c => c.code === code);
  };

  const fromCurrencyDetails = getCurrencyByCode(fromCurrency);
  const toCurrencyDetails = getCurrencyByCode(toCurrency);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-wise-blue-900">Send money abroad</h2>
      
      {/* Amount input */}
      <div className="space-y-2">
        <label htmlFor="amount" className="block text-sm font-medium text-wise-blue-700">
          You send
        </label>
        <div className="relative mt-1">
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="pl-10 pr-16 h-14 text-lg border-wise-blue-100 focus:border-wise-teal-400 focus:ring focus:ring-wise-teal-100 rounded-xl shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-wise-blue-500">
              {fromCurrencyDetails?.symbol || '$'}
            </span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Select
              value={fromCurrency}
              onValueChange={setFromCurrency}
            >
              <SelectTrigger 
                className="border-0 bg-transparent h-full focus:ring-0 w-16"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {popularCurrencies.map((currency) => (
                  <SelectItem 
                    key={currency.code} 
                    value={currency.code}
                    className="flex items-center"
                  >
                    <span className="mr-2">{currency.flag}</span>
                    {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Exchange Rate Info */}
      <div className="flex justify-between items-center py-3 px-4 bg-wise-blue-50 rounded-lg border border-wise-blue-100">
        <div className="text-sm text-wise-blue-600">
          <span className="font-medium">Exchange rate:</span>
          {isLoading ? (
            <span className="ml-2 animate-pulse">Loading...</span>
          ) : (
            <span className="ml-2">1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</span>
          )}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-wise-blue-500 mr-1 hidden sm:inline">Mid-market rate</span>
          <Info className="h-4 w-4 text-wise-blue-400" />
        </div>
      </div>
      
      {/* Currency Swap */}
      <div className="relative flex justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-wise-blue-100"></div>
        </div>
        <button 
          onClick={handleSwapCurrencies}
          className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-white border border-wise-blue-100 hover:bg-wise-blue-50 transition-colors shadow-sm text-wise-blue-500"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </button>
      </div>
      
      {/* Recipient gets */}
      <div className="space-y-2">
        <label htmlFor="convertedAmount" className="block text-sm font-medium text-wise-blue-700">
          Recipient gets
        </label>
        <div className="relative mt-1">
          <Input
            id="convertedAmount"
            type="text"
            value={convertedAmount.toFixed(2)}
            readOnly
            className="pl-10 pr-16 h-14 text-lg bg-white bg-opacity-50 border-wise-blue-100 focus:border-wise-teal-400 focus:ring focus:ring-wise-teal-100 rounded-xl shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-wise-blue-500">
              {toCurrencyDetails?.symbol || '€'}
            </span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Select
              value={toCurrency}
              onValueChange={setToCurrency}
            >
              <SelectTrigger 
                className="border-0 bg-transparent h-full focus:ring-0 w-16"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {popularCurrencies.map((currency) => (
                  <SelectItem 
                    key={currency.code} 
                    value={currency.code}
                    className="flex items-center"
                  >
                    <span className="mr-2">{currency.flag}</span>
                    {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="text-xs text-wise-blue-600 flex items-center">
          <Info className="h-3 w-3 mr-1 text-wise-blue-400" />
          The recipient will get exactly {formatCurrency(convertedAmount, toCurrency)}
        </p>
      </div>
      
      <Button className="w-full bg-wise-teal-500 hover:bg-wise-teal-600 text-white h-12 text-base rounded-xl">
        Continue 
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <p className="text-xs text-center text-wise-blue-500">
        Join 10+ million customers who save when sending money with Swapster
      </p>
    </div>
  );
};

export default CurrencyConverter;
