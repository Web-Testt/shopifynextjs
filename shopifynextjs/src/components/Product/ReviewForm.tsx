import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/Textarea';
import { Input } from '../ui/Input';
import { useToastHook } from '../ui/Toast';

export function ReviewForm({ productId }: { productId: string }) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToastHook();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, this would submit to your backend
      console.log('Submitting review:', { productId, rating, title, content, author });
      
      toast.success('Thank you for your review!');
      setRating(0);
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      toast.error('Failed to submit review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Write a Review</h3>
      
      <div>
        <label className="block text-sm font-medium mb-2">Rating</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
            >
              <Star className={`w-8 h-8 ${star <= rating ? 'fill-yellow-400' : ''}`} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="review-title" className="block text-sm font-medium mb-1">
          Review Title
        </label>
        <Input
          id="review-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Great product!"
        />
      </div>

      <div>
        <label htmlFor="review-content" className="block text-sm font-medium mb-1">
          Your Review
        </label>
        <Textarea
          id="review-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          placeholder="Share your experience with this product..."
        />
      </div>

      <div>
        <label htmlFor="review-author" className="block text-sm font-medium mb-1">
          Your Name
        </label>
        <Input
          id="review-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="John Doe"
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </Button>
    </form>
  );
}