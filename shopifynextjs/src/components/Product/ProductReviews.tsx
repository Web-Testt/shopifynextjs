import { Star, StarHalf } from 'lucide-react';
import { Button } from '../ui/Button';
import { ReviewForm } from './ReviewForm';

export function ProductReviews({ productId }: { productId: string }) {
  const reviews = [
    {
      id: '1',
      rating: 5,
      title: 'Excellent Product',
      content: 'This product exceeded my expectations. The quality is amazing and it works perfectly.',
      author: 'John D.',
      date: '2023-05-15',
    },
    {
      id: '2',
      rating: 4,
      title: 'Great Value',
      content: 'Really good value for the price. Shipping was fast and the product arrived in perfect condition.',
      author: 'Sarah M.',
      date: '2023-04-28',
    },
    {
      id: '3',
      rating: 3,
      title: 'Good but could be better',
      content: 'The product is good overall, but I expected better build quality for the price.',
      author: 'Mike T.',
      date: '2023-04-10',
    },
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingPercentage = (averageRating / 5) * 100;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">{averageRating.toFixed(1)}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = star <= Math.floor(averageRating);
                const isHalf = star === Math.ceil(averageRating) && averageRating % 1 !== 0;
                
                return isHalf ? (
                  <StarHalf key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ) : (
                  <Star key={star} className={`w-5 h-5 ${isFilled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                );
              })}
            </div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${ratingPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{review.title}</h4>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{review.content}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">- {review.author}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
        <ReviewForm productId={productId} />
      </div>
    </div>
  );
}