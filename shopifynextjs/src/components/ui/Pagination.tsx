import Link from 'next/link';
import { Button } from './Button';

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        disabled={currentPage <= 1}
        asChild
      >
        <Link href={`${basePath}?page=${currentPage - 1}`}>Previous</Link>
      </Button>
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={currentPage >= totalPages}
        asChild
      >
        <Link href={`${basePath}?page=${currentPage + 1}`}>Next</Link>
      </Button>
    </div>
  );
}