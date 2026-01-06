import { useState } from 'react';
import Image from 'next/image';

export function ProductGallery({ images }: { images: Array<{ url: string; altText: string }> }) {
  const [mainImage, setMainImage] = useState(images[0]?.url || '');

  return (
    <div className="flex flex-col">
      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 relative">
        <Image
          src={mainImage}
          alt={images.find(img => img.url === mainImage)?.altText || 'Product image'}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image.url)}
            className={`aspect-square bg-gray-100 dark:bg-gray-800 rounded border-2 ${
              mainImage === image.url ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Image
              src={image.url}
              alt={image.altText}
              fill
              className="object-cover rounded"
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}