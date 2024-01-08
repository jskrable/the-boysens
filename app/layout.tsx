import { Navbar } from './components/navbar';
import './globals.css';

export const metadata = {
  title: 'The Boysens',
  description: 'They did everything together',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <main className='flex min-h-screen flex-col items-center justify-between p-12 bg-canvas'>
          {children}
        </main>
      </body>
    </html>
  );
}
