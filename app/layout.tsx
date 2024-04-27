import './globals.css';
import type { LayoutProps } from '@/.next/types/app/layout';
import { clsx } from 'clsx';
import { Suspense } from 'react';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import Loading from './loading';

export const metadata = {
  title: 'The Boysens',
  description: 'They did everything together',
};

export default function RootLayout({ children }: LayoutProps) {
  const classes = clsx([
    'flex flex-col grow',
    'items-center justify-between',
    'bg-canvas',
    // TODO shrink this a bit for footer
    'min-h-screen',
    'px-4 pt-6 pb-2',
    'md:px-12 md:pt-10 md:pb-4',
  ]);
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={classes}>
          <Suspense fallback={<Loading />}>
            <div className="md:w-4/5 lg:w-3/4 xl:w-2/3">{children}</div>
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
