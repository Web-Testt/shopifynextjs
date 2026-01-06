import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getSearchSuggestions } from '@/lib/shopify/queries/search';

export function AdvancedSearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      const timer = setTimeout(async () => {
        setIsLoading(true);
        try {
          const results = await getSearchSuggestions(query);
          setSuggestions(results);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setIsLoading(false);
        }
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.type === 'product') {
      router.push(`/products/${suggestion.handle}`);
    } else if (suggestion.type === 'collection') {
      router.push(`/collections/${suggestion.handle}`);
    } else {
      router.push(`/search?q=${encodeURIComponent(suggestion.title)}`);
    }
    setShowSuggestions(false);
    setQuery('');
  };

  return (
    <div className="relative w-full" ref={suggestionsRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search products, collections..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition flex items-center space-x-3"
              >
                {suggestion.type === 'product' && (
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex-shrink-0">
                    {suggestion.image && (
                      <img
                        src={suggestion.image}
                        alt={suggestion.title}
                        className="w-full h-full object-cover rounded"
                      />
                    )}
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-medium line-clamp-1">{suggestion.title}</p>
                  {suggestion.type === 'product' && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {suggestion.price && `${suggestion.price.currencyCode} ${parseFloat(suggestion.price.amount).toFixed(2)}`}
                    </p>
                  )}
                  {suggestion.type === 'collection' && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">Collection</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}