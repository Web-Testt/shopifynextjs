import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
    // In a real implementation, this would change the language
    // and potentially redirect to the localized URL
    console.log('Language changed to:', languageCode);
  };

  const selectedLanguageObj = languages.find(l => l.code === selectedLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <span>{selectedLanguageObj?.flag}</span>
          <span>{selectedLanguageObj?.code.toUpperCase()}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-[150px] z-50">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => handleLanguageChange(language.code)}
            className={`flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer ${
              language.code === selectedLanguage ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}