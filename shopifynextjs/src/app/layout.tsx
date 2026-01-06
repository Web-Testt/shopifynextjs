import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Navigation/Header';
import Footer from '@/components/Navigation/Footer';
import { Toaster } from '@/components/ui/Toast';
import { CookieConsent } from '@/components/Navigation/CookieConsent';
import { PerformanceMonitor } from '@/components/utils/PerformanceMonitor';
import { MaintenanceMode } from '@/components/utils/MaintenanceMode';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopify Next.js Storefront',
  description: 'Advanced headless Shopify storefront',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PerformanceMonitor />
          <MaintenanceMode />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}