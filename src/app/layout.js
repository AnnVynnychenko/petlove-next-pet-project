import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

export const metadata = {
  title: 'PetLove',
  description: 'Pet search and assistance service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="px-5 py-2.5">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
