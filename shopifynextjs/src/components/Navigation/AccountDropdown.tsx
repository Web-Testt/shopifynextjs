import { User, LogIn, LogOut, UserPlus, Settings, ShoppingBag, Heart, BarChart2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';

export async function AccountDropdown() {
  const session = await getServerSession(authOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          {session?.user ? (
            <User className="h-5 w-5" />
          ) : (
            <User className="h-5 w-5" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-[200px] z-50">
        {session?.user ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/account" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <User className="h-4 w-4 mr-2" />
                My Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/orders" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Orders
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/wishlist" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/compare" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <BarChart2 className="h-4 w-4 mr-2" />
                Compare
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />
            <DropdownMenuItem asChild>
              <Link href="/account/settings" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/api/auth/logout" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/auth/login" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/auth/signup" className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}