
export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export const popularCurrencies: Currency[] = [
  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸"
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺"
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧"
  },
  {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳"
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    flag: "🇦🇺"
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦"
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    flag: "🇯🇵"
  },
  {
    code: "SGD",
    name: "Singapore Dollar",
    symbol: "S$",
    flag: "🇸🇬"
  }
];

export const getExchangeRate = (from: string, to: string): number => {
  // In a real app, this would call an API
  // Mock data for demonstration
  const rates: Record<string, Record<string, number>> = {
    "USD": {
      "EUR": 0.92,
      "GBP": 0.78,
      "INR": 83.26,
      "AUD": 1.52,
      "CAD": 1.37,
      "JPY": 149.98,
      "SGD": 1.35
    },
    "EUR": {
      "USD": 1.09,
      "GBP": 0.85,
      "INR": 90.78,
      "AUD": 1.65,
      "CAD": 1.49,
      "JPY": 163.55,
      "SGD": 1.47
    },
    "GBP": {
      "USD": 1.28,
      "EUR": 1.17,
      "INR": 106.82,
      "AUD": 1.95,
      "CAD": 1.76,
      "JPY": 192.41,
      "SGD": 1.73
    },
    "INR": {
      "USD": 0.012,
      "EUR": 0.011,
      "GBP": 0.0094,
      "AUD": 0.018,
      "CAD": 0.016,
      "JPY": 1.80,
      "SGD": 0.016
    },
    "AUD": {
      "USD": 0.66,
      "EUR": 0.60,
      "GBP": 0.51,
      "INR": 54.72,
      "CAD": 0.90,
      "JPY": 98.43,
      "SGD": 0.89
    },
    "CAD": {
      "USD": 0.73,
      "EUR": 0.67,
      "GBP": 0.57,
      "INR": 60.80,
      "AUD": 1.11,
      "JPY": 109.37,
      "SGD": 0.98
    },
    "JPY": {
      "USD": 0.0067,
      "EUR": 0.0061,
      "GBP": 0.0052,
      "INR": 0.56,
      "AUD": 0.010,
      "CAD": 0.0091,
      "SGD": 0.0090
    },
    "SGD": {
      "USD": 0.74,
      "EUR": 0.68,
      "GBP": 0.58,
      "INR": 61.79,
      "AUD": 1.13,
      "CAD": 1.02,
      "JPY": 111.22
    }
  };

  if (from === to) return 1;
  
  if (rates[from] && rates[from][to]) {
    return rates[from][to];
  }
  
  return 1; // Default fallback
};

export const formatCurrency = (amount: number, currencyCode: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
