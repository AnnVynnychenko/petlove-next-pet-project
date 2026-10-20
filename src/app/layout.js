import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { clampBuilder } from '@/helpers/clampBuilder';

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
  const containerPadding = clampBuilder(8, 20);
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div
          style={{ paddingInline: containerPadding }}
          className="flex flex-col flex-1"
        >
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
