import { Suspense } from 'react';
import { Navbar } from './components/navbar';
import './globals.css';
import Loading from './loading';

export const metadata = {
  title: 'The Boysens',
  description: 'They did everything together',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-canvas">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
