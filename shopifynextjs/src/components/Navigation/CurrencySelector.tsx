import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

export function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  ];

  const handleCurrencyChange = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsOpen(false);
    // In a real implementation, this would update the currency preference
    // and potentially reload prices from Shopify
    console.log('Currency changed to:', currencyCode);
  };

  const selectedCurrencyObj = currencies.find(c => c.code === selectedCurrency);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <span>{selectedCurrencyObj?.symbol}</span>
          <span>{selectedCurrencyObj?.code}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-[150px] z-50">
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onSelect={() => handleCurrencyChange(currency.code)}
            className={`flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer ${
              currency.code === selectedCurrency ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <span className="mr-2">{currency.symbol}</span>
            <span>{currency.code} - {currency.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}