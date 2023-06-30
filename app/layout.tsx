import './globals.css';

export const metadata = {
  title: 'The Boysens',
  description: 'Memorial for Jim and Sam Skrable',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          {children}
        </main>
      </body>
    </html>
  );
}
