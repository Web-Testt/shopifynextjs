import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Slider } from '../ui/Slider';

export function FilterSidebar() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [collections, setCollections] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleFilter = () => {
    const params = new URLSearchParams();
    
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      params.set('minPrice', priceRange[0].toString());
      params.set('maxPrice', priceRange[1].toString());
    }
    
    if (collections.length > 0) {
      params.set('collections', collections.join(','));
    }
    
    if (tags.length > 0) {
      params.set('tags', tags.join(','));
    }
    
    router.push(`/products?${params.toString()}`);
  };

  const handleClear = () => {
    setPriceRange([0, 1000]);
    setCollections([]);
    setTags([]);
    router.push('/products');
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h3 className="font-bold mb-4">Filters</h3>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={1000}
          step={10}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3">Collections</h4>
        <div className="space-y-2">
          {['Featured', 'New Arrivals', 'Best Sellers', 'Clearance'].map((collection) => (
            <div key={collection} className="flex items-center">
              <Checkbox
                id={`collection-${collection}`}
                checked={collections.includes(collection)}
                onCheckedChange={(checked) => {
                  setCollections(prev => 
                    checked ? [...prev, collection] : prev.filter(c => c !== collection)
                  );
                }}
              />
              <label htmlFor={`collection-${collection}`} className="ml-2 text-sm">
                {collection}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3">Tags</h4>
        <div className="space-y-2">
          {['Sale', 'New', 'Popular', 'Limited Edition'].map((tag) => (
            <div key={tag} className="flex items-center">
              <Checkbox
                id={`tag-${tag}`}
                checked={tags.includes(tag)}
                onCheckedChange={(checked) => {
                  setTags(prev => 
                    checked ? [...prev, tag] : prev.filter(t => t !== tag)
                  );
                }}
              />
              <label htmlFor={`tag-${tag}`} className="ml-2 text-sm">
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <Button onClick={handleClear} variant="outline" className="flex-1">
          Clear
        </Button>
        <Button onClick={handleFilter} className="flex-1">
          Apply
        </Button>
      </div>
    </div>
  );
}