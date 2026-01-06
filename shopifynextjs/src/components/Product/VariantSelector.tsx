import { useState } from 'react';

export function VariantSelector({
  variants,
  options,
}: {
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: Array<{ name: string; value: string }>;
  }>;
  options: Array<{ name: string; values: string[] }>;
}) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionName]: value }));
  };

  const selectedVariant = variants.find(variant => {
    return variant.selectedOptions.every(option => 
      selectedOptions[option.name] === option.value
    );
  });

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <div key={option.name} className="flex flex-col">
          <label className="text-sm font-medium mb-2 capitalize">{option.name}</label>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value;
              const isAvailable = variants.some(variant => 
                variant.availableForSale && 
                variant.selectedOptions.some(opt => opt.name === option.name && opt.value === value)
              );

              return (
                <button
                  key={value}
                  onClick={() => handleOptionChange(option.name, value)}
                  disabled={!isAvailable}
                  className={`px-3 py-1 rounded border text-sm transition ${
                    isSelected 
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {selectedVariant && !selectedVariant.availableForSale && (
        <p className="text-red-500 text-sm">This variant is sold out</p>
      )}
    </div>
  );
}